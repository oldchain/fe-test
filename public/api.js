import axios from 'axios'

export default {
    getData: () =>
    axios({
        'method':'GET',
        'url':'./data/whiskies.json',
    })
}