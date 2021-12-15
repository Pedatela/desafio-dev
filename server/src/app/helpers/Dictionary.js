
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
    }

    parse(line){
        let parsedObj = {}
        this.dictionary.forEach(element => {
            parsedObj[element.type] = element.type === "value" ?  
                parseInt(line.substring(element.start_characters - 1, element.end_characters) )/100 : 
                line.substring(element.start_characters - 1, element.end_characters).replace(/\s+$/, '')
        });
        
        return parsedObj
    }
}

module.exports = new DictionaryHelper()