 let calculation = localStorage.getItem('calculation') || '';
                function updatecalculation(oparator)
                {
                    
                    calculation += oparator;
                   // console.log(calculation);
                    output_on_page();
                    localStorage.setItem('calculation',calculation);
                }
                function output_on_page()
                {
                    document.querySelector('.js-output').innerHTML = calculation;
                }
