#  pip install ibm-watsonx-ai

from ibm_watsonx_ai import APIClient
from ibm_watsonx_ai import Credentials
from ibm_watsonx_ai.foundation_models import ModelInference
import base64

credentials = Credentials(
                   url = "https://us-south.ml.cloud.ibm.com",
                   api_key = "SECRET KEY"
                  )

client = APIClient(credentials)

def classifyPosting(userDescription,userImage):
    model = ModelInference(
    model_id = "google/flan-t5-xxl",
    api_client = client,
    project_id = "da5f6514-2800-4dd3-8125-5b6dc1af22db",
    params = {
        "max_new_tokens" : 100
    }
    )
    
    initPrompt = f"The user is supposed to provide a description of the issue they are facing in regards to a hurricane. Is the issue they provided coherent to classify and interpret what the issue is. If it is, select only one of the categories to which this description pertains to, and only return the category it belongs to: downed power line, uprooted tree, flooding, fire, scattered debris, lightning. If it is not, only return 'no.' This is the description: {userDescription}"
    model.generate(prompt=initPrompt)
    initResponse = model.generate_text(prompt=initPrompt)    
    if (initResponse == 'no'):
        imagePath = userImage
        with open(imagePath, 'rb') as img_file:
            imageBase64 = base64.b64encode(img_file.read()).decode('utf-8')
            
        imagePrompt =  "select only one of the categories to which this image pertains to, and only return the category it belongs to: downed power line, uprooted tree, flooding, fire, scattered debris, lightning."
        model.generate(prompt=imagePrompt, params={"image": imageBase64})
        return model.generate_text(prompt=imagePrompt, params={"image": imageBase64})
    else:
        return initResponse

