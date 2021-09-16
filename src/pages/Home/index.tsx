import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../../constants/colors'
import FeatherIcon from 'react-native-vector-icons/Feather'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  profileIcon: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 10,
    borderRadius: 50
  },
  headerRightIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  usernameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    paddingBottom: 5
  },
  username: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15
  },
  content: {
    flex: 1
  },
  section: {
    borderBottomColor: '#bdbdbd',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sectionTitleText: {
    flex: 1,
    fontWeight: '600',
    fontSize: 16,
    color: '#222'
  },
});

const SectionTitle = ({title}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.sectionTitle}>
      <Text style={styles.sectionTitleText}>{title}</Text>
      <MaterialCommunityIcon name="chevron-right" size={26} color="#777" />
    </TouchableOpacity>
  )
}

export default function Home() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.profileIcon} activeOpacity={1}>
            <FeatherIcon name="user" size={22} color="white"/>
          </TouchableOpacity>
          <View style={styles.headerRightIcons}>
            <TouchableOpacity activeOpacity={1}>
              <FeatherIcon name="eye" size={22} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 20}} activeOpacity={1}>
              <FeatherIcon name="help-circle" size={22} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 20}} activeOpacity={1}>
              <MaterialCommunityIcon name="email-plus-outline" size={22} color="white"/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.usernameRow}>
          <Text style={styles.username}>Olá, Matheus Maske</Text>
        </View>
      </View>
      <View style={styles.content}>
        
        
        <View style={styles.section}>
          <SectionTitle title="Conta" />
        </View>
        <View style={styles.section}>
          <MaterialCommunityIcon name="menu" size={28} color="#777" />
          <SectionTitle title="Cartão de crédito" />
        </View>

        

      </View>
    </ScrollView>
  )
}
