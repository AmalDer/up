import React, {useEffect, useState} from 'react';
import Axios from "axios";

function Students(){

    useEffect(()=>{
        fetchStudents();
    }, []);

    const [studentsList, setStudentsList] = useState([]);

<<<<<<< Updated upstream
=======
<<<<<<< HEAD
    useEffect( ()=> {
        Axios.get("localhost:4000/student").then((response) =>{
            setStudentsList(response.data);
            console.log(response.data);
        });
    }, [] );
=======
>>>>>>> Stashed changes
    const fetchStudents = async () => {
        const data = await fetch('/student/');
        const studentt = await data.json();
        setStudentsList(studentt);
    };

    // useEffect( ()=> {
    //     Axios.get("localhost:4000/student/").then((response) =>{
    //         setStudentsList(response.data);
    //         console.log(response.data);
    //     });
    // }, [] );
<<<<<<< Updated upstream
=======
>>>>>>> b0e464404abb7af61e440c60e2858ed9faa75234
>>>>>>> Stashed changes

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