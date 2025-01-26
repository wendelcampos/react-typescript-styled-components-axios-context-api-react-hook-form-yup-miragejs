/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";


interface Transaction {
    id: number
    description: string,
    type: 'income' | 'outcome'
    price: number,
    category: string
    createdAt: string
}

interface TransactionContextType {
    transactions: Transaction[]
    fetchTransactions: (query?: string) => Promise<void>
    createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
    children: React.ReactNode
}

interface CreateTransactionInput { 
    description: string
    price: number
    category: string
    type: 'income' | 'outcome'
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    
    const fetchTransactions = useCallback( 
        
        async (query?: string) => {

        const response = await api.get('transactions', {
            params: {
                _sort: 'createdAt',	
                _order: 'desc',
                q: query
            }
        })

        setTransactions(response.data)
    }, [])

    const createTransaction = useCallback(
        
        async (data: CreateTransactionInput) => { 

            const { category, description, price, type } = data

            const response = await api.post('transactions', {
                description,
                price,
                category,
                type,
                createdAt: new Date()
            })

            setTransactions(_state => [response.data, ...transactions])
    }, [])

    useEffect(() => {
        fetchTransactions()
    }, [])

    return (
        <TransactionsContext.Provider 
            value={{ transactions, fetchTransactions, createTransaction }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}