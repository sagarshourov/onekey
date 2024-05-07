<div style="margin-top: 100px; margin-bottom: 20px;  border: 1px solid #eee; box-shadow: 0 1px 1px rgba(0,0,0,.05);  width : 100%; clear : both; ">
    <div style="color: #333; background-color: #f5f5f5; border-color: #ddd; padding: 5px 10px; border-bottom: 1px solid transparent;"> Employment / Education </div>
    <div style="padding: 8px; overflow : auto;  ">

        <table class="table table-bordered">
            <tr>
                <td> <b> Primary Occupation*</b></td>
                <td>{{$data['jobTypeInput']}}</td>
            </tr>
            <tr>
                <td> <b> Present Employer or School Name*</b></td>
                <td>{{$data['jobEmployer']}}</td>
            </tr>


            <tr>
                <td> <b> Street address (Line 1)*</b></td>
                <td>{{$data['jobAddress']['streetAddress']}}</td>
            </tr>
            <tr>
                <td> <b> Street address (Line 2)</b></td>
                <td>{{$data['jobAddress']['streetAddress2']}}</td>
            </tr>
            <tr>
                <td> <b> City</b></td>
                <td>{{$data['jobAddress']['city']}}</td>
            </tr>
            <tr>
                <td> <b> State/Province*</b></td>
                <td>{{$data['jobAddress']['state']}}</td>
            </tr>
            <tr>
                <td> <b> Postal Zone/Zip Code*</b></td>
                <td>{{$data['jobAddress']['zipCode']}}</td>
            </tr>
            <tr>
                <td> <b> Telephone number*</b></td>
                <td>{{$data['jobPhoneNumber']}}</td>
            </tr>
            <tr>
                <td> <b> Country/Region* </b></td>
                <td>{{$data['jobAddress']['country']}}</td>
            </tr>
            <tr>
                <td> <b>Start Date* </b></td>
                <td> {{dateFormat($data,'jobStartDate')}}</td>
            </tr>
            <tr>
                <td> <b>Monthly Income In Local Currency*</b></td>
                <td>{{$data['jobMonthlyIncome']}}</td>
            </tr>
            <tr>
                <td> <b> Briefly describe your duties</b></td>
                <td>{{$data['jobDescribe']}}</td>
            </tr>
            <tr>
                <td> <b> Were you previously employed?</b></td>

                <td>{{rYes($data,'hasBeenPreviouslyEmployed')}}</td>
            </tr>
            <tr>
                <td> <b> Have you attended any educational institutions at a secondary level or above?</b></td>

                <td>{{rYes($data,'hasAttendedEducationalInstitutions')}}</td>
            </tr>





        </table>




    </div>
</div>