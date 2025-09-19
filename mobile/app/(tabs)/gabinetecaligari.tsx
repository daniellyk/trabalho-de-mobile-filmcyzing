import { Image, SafeAreaView, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ParallaxScrollView

                headerImage={<Image
                    source={require('@/assets/images/caligari-imagem-4-400x301.jpg')}
                    style={styles.reactLogo} />} headerBackgroundColor={{
                        dark: '#038380',
                        light: '#038380',
                    }}            >

                <ThemedView style={styles.titleContainer}>
                    <ThemedText type="title">O Gabinete do Dr. Caligari</ThemedText>
                </ThemedView>
                <ThemedView style={styles.stepContainer}>
                    <ThemedText type="subtitle">Informações gerais</ThemedText>
                    <ThemedText>Lançamento: 26 de fevereiro de 1920.</ThemedText>
                    <ThemedText>Diretor: Robert Wiene.</ThemedText>
                    <ThemedText>Gênero: Horror, Mudo, Terror.</ThemedText>
                    <ThemedText>Roteiro: Hans Janowitz e Carl Mayer.</ThemedText>
                    <ThemedText>Duração: Aproximadamente 77 minutos.</ThemedText>
                    <ThemedText>Faturamento: 18.000 USD</ThemedText>
                    <ThemedText>Disponível em: Telecine e Amazon Prime.</ThemedText>
                </ThemedView>
                <ThemedView style={styles.stepContainer}>
                    <ThemedText type="subtitle">Sinopse</ThemedText>
                    <ThemedText> A história é contada do ponto de vista de Francis, um jovem que perdeu seu melhor amigo e suspeita que o Dr. Caligari e Cesare estão por trás dos crimes.
                        À medida que Francis investiga, a linha entre a realidade e o delírio começa a se desvanecer, levando o espectador a questionar tudo o que vê na tela.</ThemedText>
                </ThemedView>
            </ParallaxScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 300,
        width: 400,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
