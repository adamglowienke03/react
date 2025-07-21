import { MainComponent } from "../components/MainComponent/MainComponent";
import { Wrapper } from "../components/Wrapper";
import "../styles/home.css";
export default function Home() {
    return (
        <Wrapper className="home-wrapper">
            <MainComponent />
            <h1>Witaj na stronie głównej</h1>
            <section>
                <p>To jest przykładowy projekt stworzony przy użyciu Vite i React.</p>
                <p>Możesz tutaj dodać swoje komponenty i logikę.</p>
            </section>
            <MainComponent />

            <section>
                <h2>Przykładowy komponent</h2>
                <p>
                    To jest przykładowy komponent, który możesz dostosować do swoich
                    potrzeb.
                </p>
            </section>

            <section>
                <h2>Inne sekcje</h2>
                <p>Dodaj tutaj więcej sekcji, aby rozbudować swoją aplikację.</p>
            </section>
            <MainComponent />
        </Wrapper>
    );
}
