# Project-14

## Docker ##
1. Pull the docker container typing "docker pull red360/containerize"
2. Rename the container to frontend by typing "docker tag red360/containerize frontend"
3. In the terminal window, type "docker image ls" you should see two images, "red360/containerize" and "frontend".
4. Type "docker run -it -p 3000:3000 frontend"
5. The command will start the development server, as soon as it does, click on http://localhost:3000 this should render you our prototype front-end.


While clicking the "drive" button it will show the initial prototype car overview page. List has been mapped via react router.
# SoftwareEngineeringPrototype

### Group 14:
Huiyang Lin
Shah Isha Redohy
Nirmala Kuhl

For the second release:
* (Nirmala) Added initial **database design describing SQL tables and datatypes** needed. See diagram here: design/DBDesign 1.0.png
* (Nirmala) Added php script that allows developers to **create this database and all tables** on their development machines. Script can be found here: php/createDatabase.php
  (PS: this will also be used to set up a small server here so we can demonstrate the whole project "in production" later)
  

Question 1) 
Number of users - if users rise we need to scale up quickly(cloud computing, replicas, easy) 
  Nonfunctional product characteristics - security, performance important in enforcing the perception that this is a trustworthy service that users can trust with their car.

Question 2) 
Browser-based -> Authentication and UI Management ->Application-specific functionality >Database and transaction management (mention that you were thinking about database access layer which would be basic shared service but it seemed overengineered)

  
Question 3)
![alt text](https://github.com/CSCI-40500-77100-Spring-2021/project-14/blob/main/LayeredArchitecture.png)

Question 4)

    Database:
    A relational database (SQL) will be used because the application is dealing with structured data

    Platform:
    Web platform only

    Server:
    Dedicated in-house server 

    Open source:
    No open source.

    Development Tools:
    The combination of PHP/SQL might potentially limit horizontal scaling which noSQL databases handle much better
