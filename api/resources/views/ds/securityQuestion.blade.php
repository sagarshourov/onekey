<div style="margin-top: 100px; margin-bottom: 20px;  border: 1px solid #eee; box-shadow: 0 1px 1px rgba(0,0,0,.05);  width : 100%; clear : both; ">
    <div style="color: #333; background-color: #f5f5f5; border-color: #ddd; padding: 5px 10px; border-bottom: 1px solid transparent;"> Security Question </div>
    <div style="padding: 8px; overflow : auto;  ">

        <table class="table table-bordered">
            <tr>
                <td> <b> Have you ever served in the military?</b></td>
                <td>{{rYes($data,'hasServedMilitary')}}</td>
            </tr>
            @if($data['hasServedMilitary']==1)
                
                
                    <tr>
                        <td>Country/Region*</td>
                     
                    
                        <td> {{ getLabelByValue($selectData,'countries', $data['militaryExperiences'][0],'country') }}</td>
                    </tr>
                    <tr>
                        <td>Branch of Service*</td>
                   
                        <td>{{ $data['militaryExperiences'][0]['service']}}</td>
                    </tr>
                    <tr>
                        <td>Rank/Position*</td>
                      
                        <td>{{ $data['militaryExperiences'][0]['rank']}}</td>
                    </tr>
                    <tr>
                        <td>Military Specialty*</td>
                      
                        <td>{{ $data['militaryExperiences'][0]['speciality']}}</td>
                    </tr>
                    <tr>
                        <td>Date of Service From*</td>
                        <td>{{ dateFormat($data['militaryExperiences'][0]['dateStart'])}}</td>
                    </tr>
                    <tr>
                        <td>Date of Service To*</td>
                        <td>{{ dateFormat($data['militaryExperiences'][0]['dateEnd'])}}</td>
                    </tr>
                    

                                            
        
                         
                
            @endif

            <tr>
                <td> <b> Have you traveled outside your country (not including the United States) in the last 5 years?</b></td>
             
                <td>{{rYes($data,'hasTraveledWithinFiveYear')}}</td>
            </tr>



            <tr>
                <td> <b> Do you have any specialized skills or training, such as firearms, explosives, nuclear, biological, or chemical experience?</b></td>
                <td>{{rYes($data,'hasExplosiveExperience')}}</td>
            </tr>
            <tr>
                <td> <b> Have you ever served in, been a member of, or been involved with a paramilitary unit, vigilante unit, rebel group, guerrilla group, or insurgent organization?</b></td>

                <td>{{rYes($data,'insurgentOrganizationMember')}}</td>
            </tr>
            <tr>
                <td> <b> Do you have a communicable disease of public health significance? (Communicable diseases of public significance include chancroid, gonorrhea, granuloma inguinale, infectious leprosy, lymphogranuloma venereum, infectious stage syphilis, active tuberculosis, and other diseases as determined by the Department of Health and Human Services.?</b></td>
       
                <td>{{rYes($data,'communicableDisease')}}</td>
            </tr>
            <tr>
                <td> <b> Do you have a mental or physical disorder that poses or is likely to pose a threat to the safety or welfare of yourself or others?</b></td>
                <td>{{rYes($data,'disorder')}}</td>
            </tr>
            <tr>
                <td> <b> Are you or have you ever been a drug abuser or addict?</b></td>
                <td>{{rYes($data,'drugAddict')}}</td>
            </tr>
            <tr>
                <td> <b> Have you ever been arrested or convicted for any offense or crime, even though subject of a pardon, amnesty, or other similar action? </b></td>
                <td>{{rYes($data,'arrested')}}</td>
            </tr>
            <tr>
                <td> <b> Have you ever violated, or engaged in a conspiracy to violate, any law relating to controlled substances?</b></td>
                <td>{{rYes($data,'controlledSubstances')}}</td>
            </tr>
            <tr>
                <td> <b> Are you coming to the United States to engage in prostitution or unlawful commercialized vice or have you been engaged in prostitution or procuring prostitutes within the past 10 years?</b></td>
                <td>{{rYes($data,'prostitution')}}</td>
                
            </tr>
            <tr>
                <td> <b> Have you ever been involved in, or do you seek to engage in, money laundering?</b></td>
                <td>{{rYes($data,'moneyLaundering')}}</td>
            </tr>
            <tr>
                <td> <b> Have you ever committed or conspired to commit a human trafficking offense in the United States or outside the United States?</b></td>
                <td>{{rYes($data,'trafficking')}}</td>
            </tr>
            <tr>
                <td> <b> Have you ever knowingly aided, abetted, assisted or colluded with an individual who has committed, or conspired to commit a severe human trafficking offense in the United States or outside the United States?</b></td>
                <td>{{rYes($data,'assistedTrafficking')}}</td>
            </tr>
            <tr>
                <td> <b> Have you ever knowingly aided, abetted, assisted or colluded with an individual who has committed, or conspired to commit a severe human trafficking offense in the United States or outside the United States?</b></td>
                <td>{{rYes($data,'relativeTrafficking')}}</td>
            </tr>

            <tr>
                <td> <b> Are you the spouse, son, or daughter of an individual who has committed or conspired to commit a human trafficking offense in the United States or outside the United States and have you within the last five years, knowingly benefited from the trafficking activities?</b></td>
                <td>{{rYes($data,'illegalActivity')}}</td>
            </tr>

            <tr>
                <td> <b> Do you seek to engage in espionage, sabotage, export control violations, or any other illegal activity while in the United States?</b></td>
                <td>{{rYes($data,'terroristActivity')}}</td>
            </tr>

            <tr>
                <td> <b> Do you seek to engage in terrorist activities while in the United States or have you ever engaged in terrorist activities?</b></td>
                <td>{{rYes($data,'financingTerrorists')}}</td>
            </tr>
            <tr>
                <td> <b> Have you ever or do you intend to provide financial assistance or other support to terrorists or terrorist organizations?</b></td>
                <td>{{rYes($data,'financingTerrorists')}}</td>
            </tr>
            <tr>
                <td> <b> Are you a member or representative of a terrorist organization?</b></td>
                <td>{{rYes($data,'terroristMember')}}</td>
            </tr>
            <tr>
                <td> <b> Have you ever ordered, incited, committed, assisted, or otherwise participated in genocide?</b></td>
                <td>{{rYes($data,'genocide')}}</td>
            </tr>
            <tr>
                <td> <b> Have you ever committed, ordered, incited, assisted, or otherwise participated in torture?</b></td>
                <td>{{rYes($data,'torture')}}</td>
            </tr>

            <tr>
                <td> <b> Have you committed, ordered, incited, assisted, or otherwise participated in extrajudicial killings, political killings, or other acts of violence?</b></td>
                <td>{{rYes($data,'killings')}}</td>
            </tr>

            <tr>
                <td> <b> Have you ever engaged in the recruitment or the use of child soldiers?</b></td>
                <td>{{rYes($data,'childSoldier')}}</td>
            </tr>
            <tr>
                <td> <b> Have you, while serving as a government official, been responsible for or directly carried out, at any time, particularly severe violations of religious freedom?</b></td>
                <td>{{rYes($data,'religiousFreedom')}}</td>
            </tr>
            <tr>
                <td> <b> Have you ever been directly involved in the establishment or enforcement of population controls forcing a woman to undergo an abortion against her free choice or a man or a woman to undergo sterilization against his or her free will?</b></td>
                <td>{{rYes($data,'sterilization')}}</td>
            </tr>
            <tr>
                <td> <b> Have you ever been directly involved in the coercive transplantation of human organs or bodily tissue?</b></td>
                <td>{{rYes($data,'transplantation')}}</td>
            </tr>
            <tr>
                <td> <b> Have you ever sought to obtain or assist others to obtain a visa, entry into the United States, or any other United States immigration benefit by fraud or willful misrepresentation or other unlawful means?</b></td>
                <td>{{rYes($data,'visaFraud')}}</td>
            </tr>



            <tr>
                <td> <b> Have you ever withheld custody of a U.S. citizen child outside the United States from a person granted legal custody by a U.S. court?</b></td>
                <td>{{rYes($data,'withheldCustody')}}</td>
            </tr>

          

            <tr>
                <td> <b> Have you voted in the United States in violation of any law or regulation?</b></td>
                <td>{{rYes($data,'voted')}}</td>
            </tr>

            <tr>
                <td> <b> Have you ever renounced United States citizenship for the purposes of avoiding taxation?</b></td>
                <td>{{rYes($data,'avoidTax')}}</td>
            </tr>

            <tr>
                <td> <b> Are you the spouse, son, or daughter of an individual who has engaged in terrorist activity, including providing financial assistance or other support to terrorists or terrorist organizations, in the last five years?</b></td>
                <td>{{rYes($data,'hasTerroristRelative')}}</td>
            </tr>

            <tr>
                <td> <b> Have you ever been removed or deported from any country? </b></td>
                <td>{{rYes($data,'wasDeported')}}</td>
            </tr>


        </table>


    </div>
</div>