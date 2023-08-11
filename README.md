
# COM623 Contemporary Web Applications AE2

## Liam Nicola - Q15065049 

### Hosted Website - https://web-app-271a0.web.app/
### Github link: https://github.com/liamnicola/Todo.git

# Contents
1) [Scripts](Scripts)

2) [Introduction](Introduction)

3) [Methodology](Methodology)
   - [Prototyping](Prototyping)
   - [Testing](Testing)
   - [Methods](Methods)

4) [Results/Conclusion](Results/Conclusion)

5) [References](References)


6) [Appendix](Appendix)


## Scripts
### Clone the repository
$ git clone https://github.com/liamnicola/webappAE2.git

### Once you have opened the code, Install the dependencies:
npm install

### Then run the application through:
npm run start

## Introduction
The aim of this project was to create a responsive single-paged web application to provide university students with an application that can be used to help them with day-to-day university related issues, which in this project is time-management. During this project, I identified how many students, that I previously interviewed and surveyed, struggled to track all upcoming tasks they have, as well as the existing services being complicated to use and did not have all tasks from each module the student was studying. Not only is this impractical, but it also means students are more likely to miss upcoming tasks. To counter this, I have created a to-do list type of application and focused on how a user would use it with simplicity, to quickly store tasks and not have to worry about a complicated process. 
In this report, I will demonstrate the process I went through when creating this application, the methodology choices and discuss the outcomes of the project to understand my areas of success and highlight any areas that could potentially be worked upon. 

## Methodology
For this project, I had previously defined the overarching methodology that I would be using to create this application. The methodology I had chosen was design thinking which has five stages to creating an application. 
 
![Design Thinking](https://user-images.githubusercontent.com/72071568/212323506-0aa26e72-7945-469e-8c2b-227db57c312e.png)

In my first report, I completed all these stages to create a design of a potential solution. These stages gave me the necessary information I needed to define the problem the application is aiming to address. For this project, I needed to redesign my prototype and testing stages to become the product I was creating, rather than a design.

### Prototyping
This phase allowed me to explore options within my application to understand how it would meet the demands of targeted users. Although the previous prototype I had created proposed a solution to student’s time management issues, the actual website design was lacking in aesthetical aspects as well as performance aspects. When creating a website, it is essential that users do not have to wait due to the performance of the application – “It can’t be emphasized more how important it is to review the website’s loading time and improve its performance. Only a handful of people wait more than 5-10 seconds”( RAO, V.P., 2019). When creating my prototype I identified that specifically the home page was slow loading due to the application rendering documents based on due dates of tasks compared to the local date. With this in mind I created another prototype.

**Previous Prototype**

 ![oldproto](https://user-images.githubusercontent.com/72071568/212323575-199b88cc-106a-4291-807a-dbd9f3f3fb44.png)

**New Prototype**

 ![newproto](https://user-images.githubusercontent.com/72071568/212323588-e423e27c-72c5-44e0-9a9e-595bc78185f8.png)

This improved upon the website performance as well as user feedback for a more professional design. The majority of the previous feedback stated that the navigation bar was basic and also negatively impacted the design. I decided to create a new navigation bar hidden in a menu so it would not impair the page content. 
 
![image](https://user-images.githubusercontent.com/72071568/212323657-7b073956-0282-49c4-8ee8-b54f90fa43fc.png)

After completing these prototypes, I confirmed with my targeted users that it would improve upon the design and functionality, my application was ready to be developed.
### Testing
The final phase of this method allowed users to test the application I was creating. After coding several components to the website, I would allow a user with no previous experience of the application attempt to complete the task. The tables below represent each test:

**User One** 
| Process | Completed | Comments |
|---------|-----------|----------|
| Access the website | Yes | X |	
| Create an account using Gmail |	Yes	| X |
| Create an account by entering an email address | Yes | X |	
| Login with Gmail account | Yes | X |	
| Logout | Yes | X |

 **User Two**
 | Process | Completed | Comments |
 |---------|-----------|----------|
| Login (register if no account) | Yes | X |	
| Navigate to the create page |	Yes	| X |
| Create a task |	Yes |	Once creating a task, user could be directed to where its displayed |
| View Task in Schedule page | Yes | X |
| Logout |	Yes	| X | 


 **User Three**
| Process | Completed | Comments |
|---------|-----------|----------|
| Login (register if no account) | Yes | X |	
| Navigate to the create page |	Yes	| X |
| Create two tasks |	Yes |	X |
| Delete one task in Schedule page | Yes | X |
| View task in the home page | Yes | X |
| Logout |	Yes	| X | 

Throughout the development of this project, I ran three tests at each milestone of my application. User one focused on testing the authentication and ensuring a user could easily access this. There were no issues with this process and the first test was fully completed.

I also tested to see if a user could create a task, which is the most important feature of this application. User two had no difficulties creating a task and viewing the task, however, did have the feedback of potentially redirecting upon form submission. I decided against this as users may need to create multiple tasks at once which could cause annoyance by keep having to switch pages.

Finally, user three was used to test deleting tasks. Each process was completed and also allowed the user to view “tasks to start” on the homepage. With the deletion created, there was no major functionality changes made to the application, so that concluded user testing. 

**Feedback**
After the application was completed, I asked users to give their honest thoughts. Each user had a positive experience with my website and was satisfied with the design and performance of the website (See Appendix A, B, C, D, E, F). Reviews for the application was improved upon from the prototype and users preferred the colour scheme. Some reviews gave light feedback on how I could improve upon this application, such as creating an edit button for each task or making light mode an option. These are both features which I would like to implement into this application especially the edit button as it is very easy to miss enter inputs.

### Methods
I believe that using the design thinking methodology has allowed me to go through the process of creating an application smoothly and previously defined the problem students were having and identified leading causes, which allowed more ideas to be produced in how I would solve them. Although this part of the project focused on the two final phases; prototype and test, it was essential that the first three stages were previously completed as this is what allows you to develop the application throughout each step. If stages are missed, then this will cause issues for the developer as this methodology revolves around information from previous stages. If while using this methodology certain stages are overlooked “The final outcome is people fail to generate, develop, refine and communicate the idea” (VIRRGOTECH, 2021) which means that the project is at risk of being a failure by not creating an application which achieves meeting the needs of the user/task that is the focus.

## Results/Conclusion
As proven by the user testing, randomly selected users (all of which are students) could complete each process without complication. As this application was created to aide students with their time management, it was essential that all users could easily access the website and create tasks quickly without wasting time through having issues locating or creating their tasks. As previously defined in my methodology, students are more likely to lose interest if an application is not responsive and does not allow them to complete their needs quickly. I believe that this application created has utilized the chosen methodology and created a tool which would benefit those who choose to use it. 

Overall, this project has succeeded by demonstrating I can define a problem within a group of target users, identify potential solutions and develop an application to meet the requirements set out. I have showcased my knowledge using React.js and firebase that I can use these to develop not only a working application, but an application that looks profession uses firebase as security. The final feedback from users was all positive and all stated that they would use an application, such as the one I have created, again. This highlights that the solution created has been effective.
On the other hand, there are some areas in which I believe could be developed further to improve upon the application, such as an edit task button which users could simply change the contents of their data if there are any changes or mistakes. Given more time I would develop more of these features.

## References

RAO, V.P., 2019. Resist Urge To Skip Design Thinking Stages [viewed 07/01/ 2023]. Available from: https://customerthink.com/resist-urge-to-skip-design-thinking-stages/

VIRRGOTECH, 2021. Design Thinking: How to Create Better Websites [viewed 07/01/ 2023]. Available from: https://virrgotech.com/using-design-thinking-to-create-better-websites/

## Appendix

### Appendix A
![A](https://user-images.githubusercontent.com/72071568/212322989-b7314bcb-086e-4509-a124-28eb12851536.png)
 
### Appendix B
![B](https://user-images.githubusercontent.com/72071568/212323045-ae17c406-3fbb-4115-b5a5-519f72fad4d5.png)

  
### Appendix C
![C](https://user-images.githubusercontent.com/72071568/212323083-c780bff4-85fa-4181-9873-5cf15ea745ab.png)

  
### Appendix D
![D](https://user-images.githubusercontent.com/72071568/212323338-a9f4d91f-4512-414f-9510-b15cfdb1fe67.png)

  
### Appendix E
![E](https://user-images.githubusercontent.com/72071568/212323350-0a55ee1a-08b5-4ca7-b45d-fcd1fa2b9963.png)

 
 
### Appendix F
![F](https://user-images.githubusercontent.com/72071568/212323361-4c0638af-371d-45df-97cd-385b00e48309.png)

 
