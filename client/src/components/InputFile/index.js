import React, {useRef} from 'react';

// API
import TransactionApi from '../../services/transaction';

import { Container, Icon } from './styles';

// Components
import { toast } from 'react-toastify'

// Icon
import {GrDocumentTxt} from "react-icons/gr";





function InputFile({setTransactions}) {

    const fileInput = useRef(null)


    async function handleFileInput(e){
        try {
            const formData = new FormData()
            formData.append('file', e.target.files[0])
            const { data } = await TransactionApi.create(formData)
            toast.success(data.msg)
            const { data: allData } = await TransactionApi.getAll()
            setTransactions(allData.data)
            
        } catch (error) {
            toast.error("Erro Interno")
        }
    };
    

    return (
        <Container>
            <label htmlFor="fileInput">
                <Icon>
                    <GrDocumentTxt />
                </Icon>
               Selecionar Arquivo
                <input id="fileInput" type="file" ref={fileInput} onChange={handleFileInput} />
            </label>
        </Container>
    )
}

export default InputFile;