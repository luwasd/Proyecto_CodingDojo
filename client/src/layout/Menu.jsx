import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'


const Menu = (props) => {

    const cerrarSesion = () => {
        localStorage.removeItem('token');
    }

    const { usuario } = props;

    return (
        <nav>
            <div className={styles.navBar}>
                <h1>{`Bienvenido/a a Pharma Plus+ ${usuario.nombre}!`}</h1>
                <div className={styles.navButtons}>
                    <NavLink to="/welcome">Inicio</NavLink>
                    <NavLink to="/perfil">Perfil</NavLink>
                    <NavLink to="/cart">Completar Compra!</NavLink>
                    <NavLink to="/login" onClick={cerrarSesion}>Cerrar Sesión</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Menu;