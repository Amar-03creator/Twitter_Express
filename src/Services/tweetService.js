import { Filter } from 'bad-words';
import {createTweet as CreateTweetRepository} from '../Respositories/tweetRepository.js'
export const createTweet = async ({body}) => {
    //try to find blocked words in the body and through error if there any
    

    const filter = new Filter();
    if(filter.isProfane(body)){
        console.log(body);
        console.log(filter.clean(body));
        throw {
            message: 'Tweet contains blocked words',
            status: 400
        };
    }

    const tweet = await CreateTweetRepository({body});
    return tweet;

}