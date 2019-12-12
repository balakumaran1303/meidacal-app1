import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import {fonts} from '../../styles/StyleSheet';

const styles = StyleSheet.create({
  commonContainerBg: {
    flex: 1,
    backgroundColor: 'black',
  },
  commonContainerWrapper: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 20,
    paddingBottom: 20,
  },
  commonTitle: {
    fontSize: 32,
    fontFamily: fonts.bold,
    letterSpacing: 0.81,
    lineHeight: 39,
    color: '#fff',
  },
  searchBox: {
    borderRadius: 8,
    backgroundColor: '#333333',
    height: 50,
    paddingLeft: 20,
    color: '#fff',
    fontSize: 16,
    fontFamily: fonts.regular,
    letterSpacing: 0.4,
    lineHeight: 22,
  },
  product: {
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formLabel: {
    color: '#fff',
    fontSize: 14,
    fontFamily: fonts.regular,
    letterSpacing: 0.35,
    lineHeight: 22,
    marginBottom: 10,
  },
  productCard: {
    margin: 20,
    padding: 10,
    width: 130,
    backgroundColor: '#333333',
    borderRadius: 4,
  },
  productDesc: {
    padding: 10,
  },
  productText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: fonts.regular,
    letterSpacing: 0.35,
    lineHeight: 22,
    marginBottom: 5,
  },
  productImage: {
    alignItems: 'center',
    marginBottom: 10,
  },
  productImagePic: {
    width: 50,
    height: 50,
  },
  productMrp: {
    color: 'green',
    fontSize: 12,
    fontFamily: fonts.regular,
    letterSpacing: 0.35,
    lineHeight: 22,
  },
});

export default class DashBoard extends Component {
  render() {
    return (
      <View style={styles.commonContainerBg}>
        <ScrollView showsVerticalScrollIndicator={true}>
          <View style={styles.commonContainerWrapper}>
            <Text style={styles.commonTitle}>medicalc</Text>
          </View>
          <View style={styles.commonContainerWrapper}>
            <TextInput
              style={styles.searchBox}
              placeholder="search"
              placeholderTextColor={'#ffffff66'}
            />
          </View>

          <View style={styles.product}>
            <Text style={styles.formLabel}>FLASH DEALS</Text>
            <Text style={(styles.formLabel, {color: 'red'})}>See All</Text>
          </View>

          <ScrollView horizontal={true}>
            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Image source={require('../../assets/images/reward.png')} />
              </View>
              <View style={styles.productDesc}>
                <Text style={styles.productText}>
                  new accu-check instant s blood
                </Text>
                <Text style={styles.productMrp}>$222</Text>
              </View>
            </View>
            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Image source={require('../../assets/images/reward.png')} />
              </View>
              <View style={styles.productDesc}>
                <Text style={styles.productText}>
                  new accu-check instant s blood
                </Text>
                <Text style={styles.productMrp}>$222</Text>
              </View>
            </View>
            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Image source={require('../../assets/images/reward.png')} />
              </View>
              <View style={styles.productDesc}>
                <Text style={styles.productText}>
                  new accu-check instant s blood
                </Text>
                <Text style={styles.productMrp}>$222</Text>
              </View>
            </View>
            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Image source={require('../../assets/images/reward.png')} />
              </View>
              <View style={styles.productDesc}>
                <Text style={styles.productText}>
                  new accu-check instant s blood
                </Text>
                <Text style={styles.productMrp}>$222</Text>
              </View>
            </View>
            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Image source={require('../../assets/images/reward.png')} />
              </View>
              <View style={styles.productDesc}>
                <Text style={styles.productText}>
                  new accu-check instant s blood
                </Text>
                <Text style={styles.productMrp}>$222</Text>
              </View>
            </View>
            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Image source={require('../../assets/images/reward.png')} />
              </View>
              <View style={styles.productDesc}>
                <Text style={styles.productText}>
                  new accu-check instant s blood
                </Text>
                <Text style={styles.productMrp}>$222</Text>
              </View>
            </View>
          </ScrollView>

					<View style={styles.product}>
            <Text style={styles.formLabel}>FLASH DEALS</Text>
            <Text style={(styles.formLabel, {color: 'red'})}>See All</Text>
          </View>
					<ScrollView horizontal={true}>
            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Image source={require('../../assets/images/reward.png')} />
              </View>
              <View style={styles.productDesc}>
                <Text style={styles.productText}>
                  new accu-check instant s blood
                </Text>
                <Text style={styles.productMrp}>$222</Text>
              </View>
            </View>
            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Image source={require('../../assets/images/reward.png')} />
              </View>
              <View style={styles.productDesc}>
                <Text style={styles.productText}>
                  new accu-check instant s blood
                </Text>
                <Text style={styles.productMrp}>$222</Text>
              </View>
            </View>
            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Image source={require('../../assets/images/reward.png')} />
              </View>
              <View style={styles.productDesc}>
                <Text style={styles.productText}>
                  new accu-check instant s blood
                </Text>
                <Text style={styles.productMrp}>$222</Text>
              </View>
            </View>
            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Image source={require('../../assets/images/reward.png')} />
              </View>
              <View style={styles.productDesc}>
                <Text style={styles.productText}>
                  new accu-check instant s blood
                </Text>
                <Text style={styles.productMrp}>$222</Text>
              </View>
            </View>
            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Image source={require('../../assets/images/reward.png')} />
              </View>
              <View style={styles.productDesc}>
                <Text style={styles.productText}>
                  new accu-check instant s blood
                </Text>
                <Text style={styles.productMrp}>$222</Text>
              </View>
            </View>
            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Image source={require('../../assets/images/reward.png')} />
              </View>
              <View style={styles.productDesc}>
                <Text style={styles.productText}>
                  new accu-check instant s blood
                </Text>
                <Text style={styles.productMrp}>$222</Text>
              </View>
            </View>
          </ScrollView>

					<View style={styles.product}>
            <Text style={styles.formLabel}>FLASH DEALS</Text>
            <Text style={(styles.formLabel, {color: 'red'})}>See All</Text>
          </View>
					<ScrollView horizontal={true}>
            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Image source={require('../../assets/images/reward.png')} />
              </View>
              <View style={styles.productDesc}>
                <Text style={styles.productText}>
                  new accu-check instant s blood
                </Text>
                <Text style={styles.productMrp}>$222</Text>
              </View>
            </View>
            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Image source={require('../../assets/images/reward.png')} />
              </View>
              <View style={styles.productDesc}>
                <Text style={styles.productText}>
                  new accu-check instant s blood
                </Text>
                <Text style={styles.productMrp}>$222</Text>
              </View>
            </View>
            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Image source={require('../../assets/images/reward.png')} />
              </View>
              <View style={styles.productDesc}>
                <Text style={styles.productText}>
                  new accu-check instant s blood
                </Text>
                <Text style={styles.productMrp}>$222</Text>
              </View>
            </View>
            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Image source={require('../../assets/images/reward.png')} />
              </View>
              <View style={styles.productDesc}>
                <Text style={styles.productText}>
                  new accu-check instant s blood
                </Text>
                <Text style={styles.productMrp}>$222</Text>
              </View>
            </View>
            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Image source={require('../../assets/images/reward.png')} />
              </View>
              <View style={styles.productDesc}>
                <Text style={styles.productText}>
                  new accu-check instant s blood
                </Text>
                <Text style={styles.productMrp}>$222</Text>
              </View>
            </View>
            <View style={styles.productCard}>
              <View style={styles.productImage}>
                <Image source={require('../../assets/images/reward.png')} />
              </View>
              <View style={styles.productDesc}>
                <Text style={styles.productText}>
                  new accu-check instant s blood
                </Text>
                <Text style={styles.productMrp}>$222</Text>
              </View>
            </View>
          </ScrollView>


				</ScrollView>
      </View>
    );
  }
}
