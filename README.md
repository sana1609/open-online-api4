Below is the list of request that can be accessed.
### Request
`GET /city` to get all cities
### Response

    [
      {
        "id": 3,
        "name": "Badung",
        "description": null
      },
      {
        "id": 4,
        "name": "Kupang",
        "description": "Great city!"
      },
      {
        "id": 2,
        "name": "Malang",
        "description": "Loveable<3!"
      }
    ]
#
### Request
`GET /city/:id` to get specific city by id
### Response
`GET /city/4`

    {
      "id": 4,
      "name": "Kupang",
      "description": "Great city!"
    }
   #
### Request
`POST /city` to store a city
### POST Body

    {
    	"name": "Kupang",
    	"description": "Great city!"
    }
   ### Response

    {
      "id": 4,
      "name": "Kupang",
      "description": "Great city!"
    }
   #
   ### Request
   `PUT /city/:id`  to update value of city by specific id
   ### PUT Body
   

    {
        	"name": "Malang",
        	"description": "Loveable<3!"
    }
### Response
`PUT /city/2`

     {
      "text": "City was updated"
    }
#
### Request
`DELETE /city/:id` to delete specific city by id
### Response

    {
      "text": "City was deleted"
    }


