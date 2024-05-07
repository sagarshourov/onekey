<div style="margin-top: 100px; margin-bottom: 20px;  border: 1px solid #eee; box-shadow: 0 1px 1px rgba(0,0,0,.05);  width : 100%; clear : both; ">
    <div style="color: #333; background-color: #f5f5f5; border-color: #ddd; padding: 5px 10px; border-bottom: 1px solid transparent;"> Family Background </div>
    <div style="padding: 8px; overflow : auto;  ">

        <table class="table table-bordered">
            <tr>
                <td> <b> Father's First (Given) Name(s)*</b></td>
                <td>@if(isset($data['fatherInfo_firstName'])) {{$data['fatherInfo_firstName']}} @endif </td>


            </tr>
            <tr>
                <td> <b> Father's Family Name(s)*</b></td>
                <td>@if(isset($data['fatherInfo_lastName'])) {{$data['fatherInfo_lastName']}} @endif </td>
            </tr>


            <tr>
                <td> <b> Do you know your Father's date of birth?</b></td>
                <td>{{$data['fatherInfo'][0]['hasBirthDate']}}</td>
                
            </tr>
            <tr>
                <td> <b> Is your father in the U.S.?</b></td>
                <td>{{ rYes($data['fatherInfo'][0],'isInUS') }}</td>
            </tr>
            <tr>
                <td> <b> Mother's First (Given) Name(s)*</b></td>
                <td>@if(isset($data['motherInfo_firstName'])) {{ $data['motherInfo_firstName'] }} @endif </td>
            </tr>
            <tr>
                <td> <b> Mother's Family Name(s)*</b></td>
                <td>@if(isset($data['motherInfo_lastName'])) {{ $data['motherInfo_lastName'] }} @endif </td>
            </tr>
            <tr>
                <td> <b> Do you know your mother's date of birth?</b></td>
              
                <td>{{ rYes($data['motherInfo'][0],'hasBirthDate') }}</td>
            </tr>
            <tr>
                <td> <b> Is your mother in the U.S.?</b></td>
            
                <td>{{ rYes($data['motherInfo'][0],'isInUS') }}</td>
            </tr>
            <tr>
                <td> <b> Do you have any immediate relatives, excluding parents, in the United States? </b></td>
                <td>{{ rYes($data['immediateRelatives'][0],'hasImmediateRelativesInUS') }}</td>
            </tr>
            <tr>
                <td> <b> Do you belong to a clan or tribe? </b></td>
                <td>{{$data['belongsToTribe']}}</td>
            </tr>
            <tr>
                <td> <b> Languages known*</b></td>
                <td>{{$data['speakingLanguagesInput']}}</td>
            </tr>
            <tr>
                <td> <b> Other languages you speak - Not listed above</b></td>
             
                <td>{{rYes($data,'hasOtherSpeakingLanguages')}}</td>
                
            </tr>
            <tr>
                <td> <b> Have you worked for any organizations, such as professional, social, or charitable ones?</b></td>
        
                <td>{{rYes($data,'hasWorkedToOrganization')}}</td>
            </tr>



        </table>




    </div>
</div>