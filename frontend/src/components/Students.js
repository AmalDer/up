import React, {useEffect, useState} from 'react';
import Axios from "axios";

function Students(){

    const [studentsList, setStudentsList] = useState([]);

    useEffect( ()=> {
        Axios.get("http://localhost:4000/students/").then((response) =>{
            setStudentsList(response.data);
            console.log(response.data);
        });
    }, [] );

    return(
        <section>
            <table>
                <tr>
                    <td>Identifiant de l'étudiant</td>
                    <td>Identifiant de l'utilisateur</td>
                    <td>Identifiant du groupe</td>
                    <td>Niveau</td>
                    <td>Nom</td>
                    <td>Prénom</td>
                    <td>Email</td>
                    <td>Génie</td>
                </tr>
            </table>
            {
                studentsList.map((val) => {
                    <tr>
                        <td>{val.idstudent}</td>
                        <td>{val.iduser}</td>
                        <td>{val.idgroup}</td>
                        <td>{val.niveau}</td>
                        <td>{val.nom}</td>
                        <td>{val.prenom}</td>
                        <td>{val.email}</td>
                        <td>{val.genie}</td>
                    </tr>
                })
            }
        </section>
    );
}

export default Students;