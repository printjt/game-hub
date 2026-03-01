import platorms from '../data/platforms'

interface Platform {   
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => ({data:platorms,isLoading:false,error:null});

export default usePlatforms;