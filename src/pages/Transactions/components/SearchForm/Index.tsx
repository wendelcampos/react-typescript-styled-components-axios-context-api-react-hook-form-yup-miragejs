import { MagnifyingGlass } from "phosphor-react";
import { SeachFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

/**
 * Porque que um componente renderiza 
 * 
 * Hooks changed (mudou o estado, contexto, reducer)
 * Props changed (mudou as propriedades)
 * Parent rendered (o componente pai foi renderizado)
 * 
 * Qual o fluxo de renderização ?
 * 1 - O React recria o html da interface daquele componente
 * 2 - Compara a versao do html recriado com a versao anterior
 * 3 - Se mudou alguma coisa ele rescreve o html na tela
 * 
 * Memo: 
 * 0 - Hooks changed. Props changed, (deep comparison)
 * 0.1 - comparar a versao anterior dos hooks  props
 * 0.2 - SE mudou algo ele vai permitir a nova renderizacao
 */

const searchTransactionSchema = z.object({
    query: z.string()
})

type SeachFormInputs = z.infer<typeof searchTransactionSchema>

export function SearchForm() {
    const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
        return context.fetchTransactions
    })

    const { 
        register, 
        handleSubmit,
        formState: { isSubmitting } 
    } = useForm<SeachFormInputs>({
        resolver: zodResolver(searchTransactionSchema)
    })

    async function handleSearchTransaction(data: SeachFormInputs) {
       await fetchTransactions(data.query)
    }

    return (
        <SeachFormContainer onSubmit={ handleSubmit(handleSearchTransaction) }>
            <input 
                type="text" 
                placeholder="Busque por transações"
                {...register('query')}	
            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SeachFormContainer>
    )
}

