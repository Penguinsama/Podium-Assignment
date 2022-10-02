NOTE:
Currently 2 tests should fail ("Mobile phone verification works as expected" and "Flag picker sets country code").

I had some issues with "Search button opens and closes modal" sometimes failing on Mac M1 chips.
Also docker seems to be a bit flaky on M1 Macs, and I did not have enough time to really dig in and try to figure it out.

Run using docker:
Docker must be installed.
Chrome must be installed.
Download/pull the repo.
In terminal navigate to the project folder and run this command:

docker run -it -v $PWD:/e2e -w /e2e cypress/included:10.9.0

It should download the needed cypress version and then run the tests.


Installation instructions without docker: 
NOTE: Make sure chrome is installed.

Install nodejs - (https://nodejs.org/en/)

Install yarn.
	On a command prompt type without the quotes "npm install --global yarn"

Install Cypress.
	On a command prompt navigate into the extracted project folder. Type without the quotes "yarn add cypress --dev"

Run tests.
	On a command prompt cd into the extracted project folder. Type without the quotes "yarn cypress run"