
import SwipeableTextMobileStepper from "../../components/Carroussel";
import Info from "../../components/Description";
import Form from "../../components/Form";
import Header from "../../components/Header";
import BasicTable from "../../components/Tabela";
import "./index.css";



const Bicentenario = () => {

    return (
        <>
        <Header/>
        <section className="sec1">
            <Form/>
            <SwipeableTextMobileStepper width={400}/>
        </section>
        <section className="sec2">
        <Info/>
    </section>
    <BasicTable className="table"/>
        </>
    );
}

export default Bicentenario