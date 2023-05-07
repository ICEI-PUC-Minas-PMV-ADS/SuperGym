import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

import AuthContext from '../../contexts/auth';

import { Header } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';
import { Categories } from '../../components/Categories';
import { Exercises } from '../../components/Exercises';
import { Cart } from '../../components/Cart';
import { CATEGORIES_GET, EXERCISES_GET, TRAINING_CREATE, PDF_DOWNLOAD } from '../../services/api';

import {
  Container,
  CategoriesContainer,
  ExercisesContainer,
  CenteredContainer
} from './styles';

import { Button } from '../../components/Button';
import ClientNameModal from '../../components/ClientNameModal';
import { CartItem } from '../../types/CartItem';
import { Exercise } from '../../types/Exercise';
import { ActivityIndicator } from 'react-native';

import { Category } from '../../types/Category';
import { Text } from '../../components/Text';


function Main() {
  const [isNameModalVisible, setisNameModalVisible] = useState(false);
  const [selectedName, setSelectedName] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [trainingId, setTrainingId] = useState('');

  const { user } = useContext(AuthContext);

  interface User {
    user_id: string;
    token: string;
  }

  useEffect(() => {
    async function getCategories() {
      setIsLoading(true);
      if (user) {
        setIsLoading(false);
        const userWithUserToken = user as User;
        const token = userWithUserToken.token;
        const { url, options } = CATEGORIES_GET(token);
        const response = await fetch(url, options);
        const categories = await response.json();

        setCategories(categories);
      }
    }

    async function getExercises() {
      setIsLoading(true);
      if (user) {
        setIsLoading(false);
        const userWithUserId = user as User;
        const userId = userWithUserId.user_id;
        const token = userWithUserId.token;
        const { url, options } = EXERCISES_GET({ token, userId });
        const response = await fetch(url, options);
        const exercises = await response.json();

        setExercises(exercises);
      }
    }

    getExercises();
    getCategories();
  }, []);

  function handleSaveName(name: string) {
    setSelectedName(name);
  }

  function handleResetTraining() {
    setSelectedName('');
    setCartItems([]);
  }

  async function handleCreateTraining() {
    try {
      setIsLoading(true);
      if (user) {
        const token = await AsyncStorage.getItem('Supergym:token');
        const body = {
          clientName: selectedName,
          exercises: cartItems.map((item: CartItem) => ({ id: item.exercise.id })),
          userId: user.user_id,
        };

        const { url, options } = TRAINING_CREATE({ body, token });
        const response = await fetch(url, options);
        const json = await response.json();
        const trainingId = json.id;
        setTrainingId(trainingId);
        setIsLoading(false);
      }

    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }

  async function handleDownloadPDF() {
    setIsLoading(true);
    try {
      const token = await AsyncStorage.getItem('Supergym:token');
      const { url, options } = PDF_DOWNLOAD({ trainingId, token });
      const response = await fetch(url, options);

      if (response.ok) {
        const pdf = await response.blob() as Blob & { _data: { name: string } };
        const filename = pdf._data.name;

        const fileUri = `${FileSystem.documentDirectory}${filename}`;

        const reader = new FileReader();
        reader.readAsDataURL(pdf);

        reader.onload = async () => {
          const pdfBase64 = reader!.result!.split(',')[1];
          await FileSystem.writeAsStringAsync(fileUri, pdfBase64, {
            encoding: FileSystem.EncodingType.Base64,
          });
          await Sharing.shareAsync(fileUri);
          handleResetTraining();
          setIsLoading(false);
        };
      }

    } catch (err) {
      setIsLoading(false);
      console.log('Error: ', err);
    }
  }

  function handleAddToCart(exercise: Exercise) {
    if (!selectedName) {
      setisNameModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(cartItem => cartItem.exercise.id === exercise.id);

      if (itemIndex < 0) {
        return prevState.concat({
          series: 1,
          exercise
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        series: item.series + 1
      };

      return newCartItems;

    });
  }

  function handleRemoveToCart(exercise: Exercise) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.exercise.id === exercise.id
      );

      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.series === 1) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        series: item.series - 1
      };

      return newCartItems;
    });
  }


  return (
    <>
      <Container>
        <Header
          selectedName={selectedName}
          onCancelTraining={handleResetTraining} />

        <>
          {exercises.length > 0 || categories.length > 0 ? (
            <>
              <CategoriesContainer>
                <Categories categories={categories} />
              </CategoriesContainer>
              <ExercisesContainer>
                <Exercises
                  exercises={exercises}
                  onAddToCart={handleAddToCart} />
              </ExercisesContainer>
            </>
          ) :
            (
              <CenteredContainer>
                <ActivityIndicator color="#25C26E" />
              </CenteredContainer>
            )
          }
        </>

        <FooterComponent>
          {!selectedName ?
            (
              <Button disabled={isLoading} onPress={() => setisNameModalVisible(true)}>Novo Treino</Button>
            )
            :
            (
              <Cart
                loading={isLoading}
                cartItems={cartItems}
                onAdd={handleAddToCart}
                onRemove={handleRemoveToCart}
                onConfirmTraining={handleCreateTraining}
                onOk={handleDownloadPDF}
              />
            )}
        </FooterComponent>
      </Container>

      <ClientNameModal
        onClose={() => setisNameModalVisible(false)}
        visible={isNameModalVisible}
        onSave={handleSaveName} />
    </>

  );
}

export default Main;
