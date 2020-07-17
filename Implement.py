
import Interact

query = input("Enter your query: ")
listHeaders = getHeaders(query)

for header in listHeaders:
    print(header)