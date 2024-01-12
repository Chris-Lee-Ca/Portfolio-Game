import { ApolloQueryResult, OperationVariables, useQuery } from '@apollo/client';
import { createContext, useContext } from "react"
import { getAllGameData } from "../sanity/sanityQuery";

export type Education = {
    school: string,
    descriptionRaw: any[],
    image: { asset : { url : string}},
    skills: string[],
    degree: string
}

export type Experience = {
    role: string,
    company: string,
    image: { asset : { url : string}},
    date: string,
    descriptionRaw: any[],
    skills: string[],
    achievementsRaw: any[]
}

export type Project = {
	title: string,
	nickname: string,
	descriptionRaw: any[],
	image: { asset : { url : string}},
	tags: string[],
	category: string,
	links: {
		title: string,
		url: string
	}[],
}



type GameStaticDataType = {
    allEducation: Education[],
    allExperience: Experience[],
    allProject: Project[]
}

interface QueryResult<TData> {
    data ?: GameStaticDataType;
    error ?: any;
    loading : boolean;
}

interface QueryContextValue<TData> {
    queryData : QueryResult<TData>;
    refetch : () => Promise<ApolloQueryResult<TData>>;
}

const GameStaticDataContext = createContext<QueryContextValue<any>>({
    queryData: { loading: true },
    refetch: () => Promise.resolve({} as ApolloQueryResult<any>),
});

export const GameStaticDataContextProvider = ({ children } : any) => {

    const { data, error, loading, refetch } = useQuery(getAllGameData);
    const value = { queryData: { data, error, loading }, refetch };
    if (value.queryData.loading)
        console.log("fetching sanity data");
    if (value.queryData.error)
        console.error("error: ", error);

    return (
        <>
            <GameStaticDataContext.Provider value={value}>
                {children}
            </GameStaticDataContext.Provider>
        </>
    )
}

export const useGameStaticDataState = () => {
    const context =  useContext(GameStaticDataContext);
    return context.queryData;
}


