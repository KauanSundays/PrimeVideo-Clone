import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from "react-native";
import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import MovieTheWhell from "../../assets/movies/the_wheel_of_time.png";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MoviesCard } from "../../components/MoviesCard";
import { MOVIESWATCH } from "../../utils/moviesWatch";

export const Home = () => {
  return (

    <View style={styles.container}>
        <View style={styles.header}>
            {/* LOGOS, PRIME VIDEO E AMAZON */}
            <Image style={styles.primeLogoImg} source={PrimeVideoLogo} />
            <Image style={styles.amazonLogoImg} source={AmazonLogo} />
        </View>

            {/* */}
            {/* CATEGORIAS */}
        <View style={styles.category}>
            <TouchableOpacity>
                <Text style={styles.categoryText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.categoryText}>TV SHOW</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.categoryText}>Movies</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.categoryText}>Kids</Text>
            </TouchableOpacity>
        </View>


        <TouchableOpacity style={styles.MovieThumb} >
            <Image source={MovieTheWhell} style={styles.movieImage} />
        </TouchableOpacity>

    {/* NÃO MOSTRAR O SCROLL*/}
    <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMoves}> 
        {/* FILMES DE CONTINUE ASSISTINDO*/} 
        <Text style={styles.movieText}>Continue assistindo...</Text>

        <FlatList
            data={MOVIESWATCHING}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL}/>}
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
        />

        {/* FILMES DE CRIME*/} 
        <Text style={styles.movieText}>Filmes de Crime...</Text>

        <FlatList
            data={MOVIESCRIME}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL}/>}
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
        />

        {/* ASSISTA NA SUA LINGUA...*/} 
        <Text style={styles.movieText}>Assista na sua língua...</Text>

        <FlatList
            data={MOVIESWATCH}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL}/>}
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
        />

    </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
        alignItems: "flex-start",
    },
    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    amazonLogoImg: {
        marginTop: -30,
        marginLeft: 30,
    },
    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 30,
    },
    categoryText: {
        fontSize: 16,
        fontWeight: "900",
        color: "#fff",
    },

    movieText: {
        color: "#fff",
        fontSize: 20,
        paddingTop: 15,
        paddingBottom: 10,
        fontWeight: "700",

    },
    whellMovie: {
        width: "100%",
        height: 200,
        alignItems: "center",
    },

    MovieThumb: {
        width: "100%",
        alignItems: 'center',
    },

    contentMoves: {
        margin: 15,
        borderRadius: 50,
    },

});
