
class DictionaryHelper {

    constructor(){
        this.dictionary = [
            {
                type: "transaction_type",
                start_characters: 0,
                end_characters: 1,
                length: 1
            },
            {
                type: "occurrence_date",
                start_characters: 2,
                end_characters: 9,
                length: 8
            },
            {
                type: "value",
                start_characters: 10,
                end_characters: 19,
                length: 10
            },
            {
                type: "cpf",
                start_characters: 20,
                end_characters: 30,
                length: 11
            },
            {
                type: "card",
                start_characters: 31,
                end_characters: 42,
                length: 12
            },
            {
                type: "hour",
                start_characters: 43,
                end_characters: 48,
                length: 6
            },
            {
                type: "store_owner",
                start_characters: 49,
                end_characters: 62,
                length: 14
            },
            {
                type: "store_name",
                start_characters: 63,
                end_characters: 81,
                length: 19
            }
        ]

        this.transactionDetails = [
            {
                type: "1",
                description: "Débito",
                business_transaction_type: "Entrada"
            },
            {
                type: "2",
                description: "Boleto",
                business_transaction_type: "Saída"
            },
            {
                type: "3",
                description: "Financiamento",
                business_transaction_type: "Saída"
            },
            {
                type: "4",
                description: "Credito",
                business_transaction_type: "Entrada"
            },
            {
                type: "5",
                description: "Recebimento Emprestimo",
                business_transaction_type: "Entrada"
            },
            {
                type: "6",
                description: "Vendas",
                business_transaction_type: "Entrada"
            },
            {
                type: "7",
                description: "Recebimento TED",
                business_transaction_type: "Entrada"
            },
            {
                type: "8",
                description: "Recebimento DOC",
                business_transaction_type: "Entrada"
            },
            {
                type: "9",
                description: "Aluguel",
                business_transaction_type: "Saída"
            }
        ]
    }

    parse(line){
        let parsedObj = {}
        this.dictionary.forEach(element => parsedObj[element.type] = line.substring(element.start_characters - 1, element.end_characters).replace(/\s+$/, ''));
        return parsedObj
    }

    returnTransactionDescription(transaction){
        let transactionDetail = this.transactionDetails.find(trans => trans.type === transaction.transaction_type)
        console.log(transactionDetail)
        return {...transaction, description: transactionDetail.description, business_transaction_type: transactionDetail.business_transaction_type}
    }


}

module.exports = new DictionaryHelper()