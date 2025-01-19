import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

let passwordSchema = yup.object().shape({
    passwordLength: yup.number()
        .required('Password length is required')
        .min(4, 'Password length must be at least 1 digit')
        .max(16, 'Password length must be at most 10 digits')
  });
  

export default function PasswordGenerator() {
    const [password, setPassword] = useState('');
    const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);

    const generatePasswordString = (passwordLength: number) => {
        let characters = '';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+';
        if (includeUppercase) characters += uppercase;
        if (includeLowercase) characters += lowercase;
        if (includeNumbers) characters += numbers;
        if (includeSymbols) characters += symbols;
        const passwordString = createPassword(characters, passwordLength);
        setPassword(passwordString);
        setIsPasswordGenerated(true);
    }

    const createPassword = (characters: string, passwordLength: number) => {
        let results = '';
        for (let i = 0; i < passwordLength; i++) {
            results += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return results;
    }

    const resetPassword = () => {
        // Logic to reset password
        setPassword('');
        setIsPasswordGenerated(false);
        setIncludeUppercase(false);
        setIncludeLowercase(false);
        setIncludeNumbers(false);
        setIncludeSymbols(false);
    }

    return (
        <ScrollView style={{ padding: 20 }}>
            <View>
                <Text style={styles.heading}>Password Generator</Text>
            </View>
            <Formik
                initialValues={{ passwordLength: '' }}
                validationSchema={passwordSchema}
                onSubmit={values => {
                    generatePasswordString(+values.passwordLength);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View>
                        <View style={styles.passwordLengthWrapper}>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Text style={{ alignItems: 'flex-start' }}>Password Length</Text>
                            {errors.passwordLength && touched.passwordLength && <Text style={{ color: 'red' }}>{errors.passwordLength}</Text>}
                            </View>
                            <TextInput
                                style={[styles.input, { alignItems: 'flex-end' }]}
                                onChangeText={handleChange('passwordLength')}
                                onBlur={handleBlur('passwordLength')}
                                value={values.passwordLength}
                                placeholder="Enter password length"
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={styles.checkboxContainer}>
                            <View style={styles.inputWrapper}>
                                <Text>Include Uppercase</Text>
                                <BouncyCheckbox
                                    isChecked={includeUppercase}
                                    onPress={() => setIncludeUppercase(!includeUppercase)}
                                    fillColor="#C9A0DC"
                                />
                            </View>
                        </View>
                        <View style={styles.inputWrapper}>
                            <Text>Include Lowercase</Text>
                            <BouncyCheckbox
                                isChecked={includeLowercase}
                                onPress={() => setIncludeLowercase(!includeLowercase)}
                                fillColor="#C9A0DC"
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Text>Include Numbers</Text>
                            <BouncyCheckbox
                                isChecked={includeNumbers}
                                onPress={() => setIncludeNumbers(!includeNumbers)}
                                fillColor="#C9A0DC"
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Text>Include Symbols</Text>
                            <BouncyCheckbox
                                isChecked={includeSymbols}
                                onPress={() => setIncludeSymbols(!includeSymbols)}
                                fillColor="#C9A0DC"
                            />
                        </View>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity
                                onPress={handleSubmit}
                                style={styles.primaryBtn}
                            >
                                <Text style={{
                                    color: 'white',
                                }}>Generate Password</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={resetPassword}
                                style={styles.secondryBtn}
                            >
                                <Text style={{
                                    color: 'white',
                                }}>Reset Password</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ margin: 20, fontSize: 20 }}>Generated Password: {isPasswordGenerated ? password : ''}</Text>
                        </View>
                    </View>
                )}
            </Formik>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    passwordLengthWrapper: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
        width: 100
    },
    checkboxContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 10
    },
    inputWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10
    },
    primaryBtn: {
        width: 200,
        height: 50,
        backgroundColor: '#C9A0DC',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    secondryBtn: {
        width: 200,
        height: 50,
        backgroundColor: '#FFA07A',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }

})