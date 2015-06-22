# social-transport
Unified transport application. a combination for public transport, car pool, private transport, shared taxi and others.
An open source system that will encourage sharing transport means, improve efficiency by uniting transport 
options and as a result reduce CO2 emission. 


#The problem
We all know how difficult it is to commute during rush hours.
How many of the 
If we choose public transport we might have no place. 

#Our Aim
Provide a platform for encouraging people to share transportation means. 
Unite transport option to a single application. 
Transport providers should add their lines and online status (how full is the bus)
A default car pool application 

#The Commuter
Find the fastest, easiest or cheapest way to get from one point to another. 

#Costomizable/Open source solution 
Different cities/states/countries may have different needs and restrictions. The solution should be open and easy to customize



#Competiotion vs cooperation 
This solution will encourage cooperation, sharing your transport offer might be interpreted as a threat in a competitive market.
However when transport is shared and social more people will use public and private transport.  

#Architecture 

We have the following elements:

Provider 
    Admin Application
    Driver Application
Central Server/Database
    
The provider publishes his services using Social Transport API. 
The driver Application is used to get car/bus/taxi location and set availability (and number of seats available) 
 
 
Provider Example:
Friends Carpool Application.
 Our application will offer car pooling based on facebook or other social networks friends. 
 User can moderate people in his carpool list. Compensation will be handled by the application.
 

   



#API

Group 
Route 
Route Status

##Questions 
Providers - Central Server relationship. 
Should the routes be managed centrally. Providers will update a central server with routes and status and the social-transport 
will provide this information to the commuters. 
The other options is that the providers will manage routes and the cntral server will query this information online. 



#Technology 
We choose the following technologies in our prototype:

Database - Mondodb
Server/Application Login - Python/Tornado
Client Side - Angularjs, angular material design  


