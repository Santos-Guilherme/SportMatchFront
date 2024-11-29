import React, { useState, useEffect } from 'react';
import './index.scss';
import { useAuth } from '../../../contexts/AuthContext';
import { updateUserFields, updateUserPhoto, getUserById } from '../../../controllers/userController';
import { API_ADDRESS } from '../../../api/constants';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Profile from '../Profile';

export default function Configurações() {
    return (
        <div className="Configurações">
            <Header></Header>
            <Profile></Profile>
            <Footer></Footer>
        </div>
    );
}
