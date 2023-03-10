import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Cart from '../components/Cart';
import Product from '../components/Product';
import styles from './styles.module.scss';

const Welcome = () => {

    const { usuario, setUsuario, cartItem, getProductos, getProductosCarrito } = useOutletContext();

    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/login');
        } else {
            axios
                .get(`http://localhost:4000/user`, {
                    headers: {
                        acceso: token, // token
                    },
                })
                .then(({ data }) => setUsuario(data))
                .catch((error) => console.error(error));
        }
    }, [token])

    return (
        <>
            <div className={styles.welcome}>
                <Cart />
                <Product />
                {/* <h3>{usuario.nombre ? `Bienvenido ${usuario.nombre}!!` : 'No se ha podido ingresar.'}</h3>
                <h2>{usuario.nombre ? `Has ingresado correctamente!` : 'Te estamos viendo....'}</h2>
                <div className={style.botones}>
                    <button onClick={() => navigate('/login')}>Login</button>
                    <button onClick={() => navigate('/')}>Register</button>
                </div> */}
            </div>
        </>
    )
}

export default Welcome