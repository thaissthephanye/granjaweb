import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import './ModalGalpao.css';

function ModalGalpao({ show, onHide, onSubmit, galpao }) {
    const [formData, setFormData] = useState({
        nome: '',
        quantidadeFrangos: '',
        quantidadeComedouros: '',
        quantidadeBebedouros: '',
        quantidadeVentiladores: '',
        quantidadeExaustores: '',
        quantidadeResponsaveis: '',
        termometroAmbiente: false
    });

    const [errors, setErrors] = useState({});
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        if (galpao) {
            setFormData({
                nome: galpao.nome || '',
                quantidadeFrangos: galpao.quantidadeFrangos || '',
                quantidadeComedouros: galpao.quantidadeComedouros || '',
                quantidadeBebedouros: galpao.quantidadeBebedouros || '',
                quantidadeVentiladores: galpao.quantidadeVentiladores || '',
                quantidadeExaustores: galpao.quantidadeExaustores || '',
                quantidadeResponsaveis: galpao.quantidadeResponsaveis || '',
                termometroAmbiente: galpao.termometroAmbiente || false
            });
        } else {
            setFormData({
                nome: '',
                quantidadeFrangos: '',
                quantidadeComedouros: '',
                quantidadeBebedouros: '',
                quantidadeVentiladores: '',
                quantidadeExaustores: '',
                quantidadeResponsaveis: '',
                termometroAmbiente: false
            });
        }
        setErrors({});
        setValidated(false);
    }, [galpao, show]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    const validarCampos = () => {
        const novosErros = {};

        if (!formData.nome.trim()) {
            novosErros.nome = 'Nome é obrigatório';
        }

        const camposNumericos = [
            'quantidadeFrangos',
            'quantidadeComedouros',
            'quantidadeBebedouros',
            'quantidadeVentiladores',
            'quantidadeExaustores',
            'quantidadeResponsaveis'
        ];

        camposNumericos.forEach(campo => {
            const valor = formData[campo];
            if (valor === '' || valor === null) {
                novosErros[campo] = 'Campo obrigatório';
            } else if (isNaN(valor) || Number(valor) < 0) {
                novosErros[campo] = 'Deve ser um número válido maior ou igual a zero';
            }
        });

        return novosErros;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const novosErros = validarCampos();

        if (Object.keys(novosErros).length > 0) {
            setErrors(novosErros);
            setValidated(true);
            return;
        }

        const dadosParaEnviar = {
            ...formData,
            id: galpao?.id,
            quantidadeFrangos: Number(formData.quantidadeFrangos),
            quantidadeComedouros: Number(formData.quantidadeComedouros),
            quantidadeBebedouros: Number(formData.quantidadeBebedouros),
            quantidadeVentiladores: Number(formData.quantidadeVentiladores),
            quantidadeExaustores: Number(formData.quantidadeExaustores),
            quantidadeResponsaveis: Number(formData.quantidadeResponsaveis)
        };

        onSubmit(dadosParaEnviar);
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
            dialogClassName="custom-modal"
        >
            <Modal.Header closeButton className="modal-header-custom">
                <Modal.Title>
                    {galpao ? (
                        <span>✏️ Editar Galpão</span>
                    ) : (
                        <span>➕ Novo Galpão</span>
                    )}
                </Modal.Title>
            </Modal.Header>

            <Form onSubmit={handleSubmit} noValidate>
                <Modal.Body className="modal-body-custom">
                    <Form.Group className="form-group-custom">
                        <Form.Label className="required-field">Nome do Galpão</Form.Label>
                        <Form.Control
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            isInvalid={!!errors.nome}
                            placeholder="Ex: Galpão Norte A"
                            className="form-control-custom"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.nome}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <div className="form-row">
                        <Form.Group className="form-group-custom half-width">
                            <Form.Label className="required-field">Quantidade de Frangos</Form.Label>
                            <Form.Control
                                type="number"
                                name="quantidadeFrangos"
                                value={formData.quantidadeFrangos}
                                onChange={handleChange}
                                isInvalid={!!errors.quantidadeFrangos}
                                min="0"
                                placeholder="0"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.quantidadeFrangos}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="form-group-custom half-width">
                            <Form.Label className="required-field">Quantidade de Comedouros</Form.Label>
                            <Form.Control
                                type="number"
                                name="quantidadeComedouros"
                                value={formData.quantidadeComedouros}
                                onChange={handleChange}
                                isInvalid={!!errors.quantidadeComedouros}
                                min="0"
                                placeholder="0"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.quantidadeComedouros}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>

                    <div className="form-row">
                        <Form.Group className="form-group-custom half-width">
                            <Form.Label className="required-field">Quantidade de Bebedouros</Form.Label>
                            <Form.Control
                                type="number"
                                name="quantidadeBebedouros"
                                value={formData.quantidadeBebedouros}
                                onChange={handleChange}
                                isInvalid={!!errors.quantidadeBebedouros}
                                min="0"
                                placeholder="0"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.quantidadeBebedouros}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="form-group-custom half-width">
                            <Form.Label className="required-field">Quantidade de Ventiladores</Form.Label>
                            <Form.Control
                                type="number"
                                name="quantidadeVentiladores"
                                value={formData.quantidadeVentiladores}
                                onChange={handleChange}
                                isInvalid={!!errors.quantidadeVentiladores}
                                min="0"
                                placeholder="0"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.quantidadeVentiladores}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>

                    <div className="form-row">
                        <Form.Group className="form-group-custom half-width">
                            <Form.Label className="required-field">Quantidade de Exaustores</Form.Label>
                            <Form.Control
                                type="number"
                                name="quantidadeExaustores"
                                value={formData.quantidadeExaustores}
                                onChange={handleChange}
                                isInvalid={!!errors.quantidadeExaustores}
                                min="0"
                                placeholder="0"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.quantidadeExaustores}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="form-group-custom half-width">
                            <Form.Label className="required-field">Quantidade de Responsáveis</Form.Label>
                            <Form.Control
                                type="number"
                                name="quantidadeResponsaveis"
                                value={formData.quantidadeResponsaveis}
                                onChange={handleChange}
                                isInvalid={!!errors.quantidadeResponsaveis}
                                min="0"
                                placeholder="0"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.quantidadeResponsaveis}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>

                    <Form.Group className="form-group-custom checkbox-group">
                        <Form.Check
                            type="checkbox"
                            name="termometroAmbiente"
                            label="Possui Termômetro de Ambiente"
                            checked={formData.termometroAmbiente}
                            onChange={handleChange}
                            className="custom-checkbox"
                        />
                    </Form.Group>

                    {validated && Object.keys(errors).length > 0 && (
                        <Alert variant="danger" className="error-alert">
                            <strong>Por favor, corrija os seguintes erros:</strong>
                            <ul className="error-list">
                                {Object.values(errors).map((erro, index) => (
                                    <li key={index}>{erro}</li>
                                ))}
                            </ul>
                        </Alert>
                    )}
                </Modal.Body>

                <Modal.Footer className="modal-footer-custom">
                    <Button variant="secondary" onClick={onHide} className="cancel-button">
                        Cancelar
                    </Button>
                    <Button variant="primary" type="submit" className="submit-button">
                        {galpao ? 'Atualizar Galpão' : 'Salvar Galpão'}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default ModalGalpao;