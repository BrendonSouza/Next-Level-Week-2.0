import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

import styles from './styles';

function TeacherList(){

  const [teachers, setTeachers] = useState([]);

  const [isfilterVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function  handleToggleFiltersVisible(){
    setIsFiltersVisible(!isfilterVisible);
  }

  async function handleFilterSubmit(){
    const response = await api.get('classes', {
      params:{
          subject,
          week_day,
          time,
      }
  });

  console.log(response.data);

  setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader 
      title="Proffys disponíveis" 
      headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisible}>
          <Feather name='filter' size={20} color='#FFF'/>
        </BorderlessButton>
      )}
      >
        { isfilterVisible && (
            <View style={styles.searchForm}>
              <Text style={styles.label}>Matéria</Text>
              <TextInput
                value={subject}
                onChangeText={text => setSubject(text)}
                placeholderTextColor={"#c1bccc"} 
                style={styles.input}
                placeholder="Qual a matéria?"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                  <TextInput
                    value={week_day}
                    onChangeText={text => setWeekDay(text)}
                    placeholderTextColor={"#c1bccc"} 
                    style={styles.input}
                    placeholder="Qual o dia?"
                  />
              </View>

              <View style={styles.inputBlock}>
                  <Text style={styles.label}>Horário</Text>
                  <TextInput
                    value={time}
                    onChangeText={text => setTime(text)}
                    placeholderTextColor={"#c1bccc"} 
                    style={styles.input}
                    placeholder="Qual Horário?"
                  />
                </View>
            </View>

            <RectButton onPress={handleFilterSubmit} style={styles.submitButton}>                
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>

          </View>   
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  )
}

export default TeacherList;