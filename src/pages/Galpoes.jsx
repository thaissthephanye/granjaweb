import React, { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import './Galpoes.css';
import ListaGaloes from '../components/ListaGaloes';
import ModalGalpao from '../components/ModalGalpao';
import { createGalpao, updateGalpao } from '../services/api';

function Galpoes() {
    const [showModal, setShowModal] = useState(false);
    const [galpaoSelecionado, setGalpaoSelecionado] = useState(null);
    const [refresh, setRefresh] = useState(0);
    const [alert, setAlert] = useState({ show: false, variant: '', message: '' });

    const handleAdicionar = () => {
        setGalpaoSelecionado(null);
        setShowModal(true);
    };

    const handleEditar = (galpao) => {
        setGalpaoSelecionado(galpao);
        setShowModal(true);
    };

    const handleFecharModal = () => {
        setShowModal(false);
        setGalpaoSelecionado(null);
    };

    const handleSubmit = async (dados) => {
        try {
            if (galpaoSelecionado) {
                await updateGalpao(galpaoSelecionado.id, dados);
                setAlert({
                    show: true,
                    variant: 'success',
                    message: '✅ Galpão atualizado com sucesso!'
                });
            } else {
                await createGalpao(dados);
                setAlert({
                    show: true,
                    variant: 'success',
                    message: '✅ Galpão cadastrado com sucesso!'
                });
            }

            handleFecharModal();
            setRefresh(refresh + 1);

            setTimeout(() => {
                setAlert({ ...alert, show: false });
            }, 3000);
        } catch (error) {
            setAlert({
                show: true,
                variant: 'danger',
                message: '❌ Erro ao salvar galpão. Tente novamente.'
            });
        }
    };

    return (
        <div className="galpoes-page">
            <Container className="galpoes-container">
                <div className="page-header">
                    <h1 className="page-title">
                        <span className="title-icon"></span>
                        Gerenciamento de Galpões
                    </h1>
                    <p className="page-subtitle">
                        Cadastre e gerencie todos os galpões da sua granja
                    </p>
                </div>

                {alert.show && (
                    <Alert
                        variant={alert.variant}
                        onClose={() => setAlert({ ...alert, show: false })}
                        dismissible
                        className="custom-alert"
                    >
                        <div className="alert-content">
                            {alert.message}
                        </div>
                    </Alert>
                )}

                <div className="action-bar">
                    <Button
                        variant="success"
                        onClick={handleAdicionar}
                        className="add-button"
                    >
                        <span className="button-icon">➕</span>
                        Adicionar Novo Galpão
                    </Button>
                </div>

                <div className="table-wrapper">
                    <ListaGaloes onEdit={handleEditar} refresh={refresh} />
                </div>

                <ModalGalpao
                    show={showModal}
                    onHide={handleFecharModal}
                    onSubmit={handleSubmit}
                    galpao={galpaoSelecionado}
                />
            </Container>
        </div>
    );
}

export default Galpoes;