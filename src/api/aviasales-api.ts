import axios from "axios";


const instance = axios.create({
    baseURL: 'https://front-test.dev.aviasales.ru/',
    timeout: 1000*5
})

export const authAPI ={
    searchId(){
        return instance.get('search')
    },
    packTickets(searchId: string){
        return  instance.get<ResponseType>(`tickets?searchId=${searchId}`)
    }
}

export type searchIdType ={
    searchId:string
}
export type packTickets={
    tickets: Array<Ticket>,
    stop: boolean | null
}
export type Ticket ={
    // Цена в рублях
    price: number
    // Код авиакомпании (iata)
    carrier: string
    // Массив перелётов.
    // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
    segments: [
        {
            // Код города (iata)
            origin: string
            // Код города (iata)
            destination: string
            // Дата и время вылета туда
            date: string
            // Массив кодов (iata) городов с пересадками
            stops: string[]
            // Общее время перелёта в минутах
            duration: number
        }
    ]
}
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    tickets: Array<Ticket>,
    stop: boolean
}
export enum StatusCode {
    OK = 0,
    ERROR,
    CAPTCHA = 10,

}