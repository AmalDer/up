import React, {useEffect, useState} from 'react';
import Axios from "axios";

function Groups(){

    const [groupsList, setGroupsList] = useState([]);

    useEffect( ()=> {
        Axios.get("localhost:4000/group/").then((response) =>{
            setGroupsList(response.data);
            console.log(response.data);
        });
    }, [] );

    return(
        <section>
            <table>
                <tr>
                    <td>Identifiant du groupe</td>
                    <td>Nom du groupe</td>
                </tr>
            </table>
            {
                groupsList.map((val) => {
                    <tr>
                        <td>{val.idgroup}</td>
                        <td>{val.groupname}</td>
                    </tr>
                })
            }
        </section>
    );
}

export default Groups;