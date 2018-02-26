# Hebrew Flashcards word service API

This service provides word data for a Hebrew flashcard language learning app.

## Usage

### List words

**Endpoint: `/words`**

Returns all the words with the specified parameters and pagination info

*Query Parameters:*
* (optional) `partOfSpeech`: e.g. "verb"
* (optional) `limit`: e.g. 10
* (optional) `offset`: e.g. 2

*Sample Response:*
```json
[
    {
        "_id": "5a9439a24e443d2b5c9d7af9",
        "hebrew": "אמר",
        "english": "to say",
        "count": 5317,
        "partOfSpeech": "verb"
    },
    {
        "_id": "5a9439a24e443d2b5c9d7afe",
        "hebrew": "היה",
        "english": "to be",
        "count": 3576,
        "partOfSpeech": "verb"
    }
]
```


###Get word

**Endpoint: `/words/{word_id}`**

*Path parameters*
* `word_id`: e.g. "5a9439a24e443d2b5c9d7aab"

*Sample Response:*

```json
{
    "_id": "5a9439a24e443d2b5c9d7aab",
    "hebrew": "עשׂה",
    "english": "to do, make",
    "count": 2632,
    "partOfSpeech": "verb"
}
```
