import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/Critica-Free-Guy-Ryan-Reynolds.jpg')}
                    style={styles.reactLogo}
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Free Guy</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Informações Gerais</ThemedText>
                <ThemedText> Lançamento:  19 de agosto de 2021 </ThemedText>
                <ThemedText> Gênero: Comédia, Ficção Científica e Ação </ThemedText>
                <ThemedText> diretor: Shawn Levy </ThemedText>
                <ThemedText> Roteiro: Matt Lieberman e Zak Penn </ThemedText>
                <ThemedText> Duração: 1 hora e 55 minutes </ThemedText>
                <ThemedText> Orçamento: US$ 331,5 milhões </ThemedText>
                <ThemedText> Distribuição:  20th Century Studios </ThemedText>
                <ThemedText>Onde Assistir: Star+  Disney+</ThemedText>
                <ThemedText /> <ThemedText>

                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Sinopse</ThemedText>
                <ThemedText>
                    {`Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando descobre que é um personagem em um jogo interativo. Ele precisa aceitar sua realidade e lidar com o fato de que é o único que pode salvar o mundo.
O filme se torna uma corrida contra o tempo, onde Guy precisa se tornar o herói que ele sempre quis ser para salvar o seu mundo, enquanto Millie e Keys lutam para provar que Antwan roubou o código. É uma história que mistura ação, comédia e romance, explorando a ideia de ter controle sobre a própria vida.
`}
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle"></ThemedText>
                <ThemedText>
                    {``}
                    <ThemedText type="defaultSemiBold"></ThemedText> {' '}
                    <ThemedText type="defaultSemiBold"></ThemedText> {' '}
                    <ThemedText type="defaultSemiBold"></ThemedText> {' '}
                    <ThemedText type="defaultSemiBold"></ThemedText>
                </ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
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
        height: 250,
        width: 400,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
