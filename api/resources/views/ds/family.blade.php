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
                <td>{{ rYes($data['fatherInfo'][0],'hasBirthDate')}}</td>

            </tr>

            @if($data['fatherInfo'][0]['hasBirthDate']==1)
            <tr>
                <td>What is your father's birth date?*</td>
                <td>{{dateFormat($data['fatherInfo_birthDate'])}}</td>
            </tr>
            @endif
            <tr>
                <td> <b> Is your father in the U.S.?</b></td>
                <td>{{ rYes($data['fatherInfo'][0],'isInUS') }}</td>
            </tr>

            @if($data['fatherInfo'][0]['isInUS']==1)
            <tr>
                <td> <b> Father's status*</b></td>
                <td>{{ $data['fatherInfo'][0]['status'] }}</td>
            </tr>
            @endif


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
            @if($data['motherInfo'][0]['hasBirthDate']==1)
            <tr>
                <td>What is your mather's birth date?*</td>
                <td>{{dateFormat($data['fatherInfo_birthDate'])}}</td>
            </tr>
            @endif
            <tr>
                <td> <b> Is your mother in the U.S.?</b></td>

                <td>{{ rYes($data['motherInfo'][0],'isInUS') }}</td>
            </tr>

            @if($data['motherInfo'][0]['isInUS']==1)
            <tr>
                <td> <b> Mather's status*</b></td>
                <td>{{ $data['motherInfo'][0]['status'] }}</td>
            </tr>
            @endif
            <tr>
                <td> <b> Do you have any immediate relatives, excluding parents, in the United States? </b></td>
                <td>{{ rYes($data['immediateRelatives'][0],'hasImmediateRelativesInUS') }}</td>
            </tr>
            @if($data['immediateRelatives'][0]['hasImmediateRelativesInUS']==1)
                @foreach($data['immediateRelatives'] as $key => $immRelative)
                    <tr>
                        <td colspan="2">
                            <div class="card p-0">
                                <h6 class="card-header p-1">Immediate relative # {{ $key+1}}</h6>
                                <div class="card-body p-0">
                                    <table class="table mb-0 table-bordered">
                                        <tr>
                                            <td> <b> First (Given) Name(s)</b></td>
                                            <td> {{ $immRelative['firstName'] }}</td>
                                        </tr>
                                        <tr>
                                            <td> <b>  Family Name(s)*</b></td>
                                            <td> {{ $immRelative['lastName'] }}</td>
                                        </tr>
                                        <tr>
                                            <td>Relationship to You</td>
                                            <td> {{ getLabelByValue($selectData,'relation', $immRelative,'relation') }}</td>
                                        </tr>
                                        <tr>
                                            <td>Relative's status</td>
                                            <td> {{ getLabelByValue($selectData,'status', $immRelative,'statusInput') }}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </td>
                    </tr>
                @endforeach
            @endif

            
            @if(array_search($data['maritalStatus'], array("MARRIED", "DIVORCED", "WIDOWED") ))
            <tr>
                <td colspan="2">
                    <div class="card p-0">
                        <h6 class="card-header p-1">Spouse Information </h6>
                        <div class="card-body p-0">
                            <table class="table mb-0 table-bordered">
                                <tr>
                                    <td> <b> Spouse's Given Names (include Maiden Name)</b></td>
                                    <td> {{ $data['partnerInfo']['firstName'] }}</td>
                                </tr>
                                <tr>
                                    <td> <b>  Spouse’s Last Names</b></td>
                                    <td> {{$data['partnerInfo']['lastName'] }}</td>
                                </tr>
                                <tr>
                                    <td>Spouse's Date of Birth</td>
                                    <td> {{dateFormat($data['partnerInfo']['birthDate']) }}</td>
                                </tr>
                                <tr>
                                    <td>Spouse's Country/Region of Origin (Nationality)</td>
                                    <td> {{ getLabelByValue($selectData,'countries', $data['partnerInfo'],'nationalityCountryInput') }}</td>
                                </tr>

                                <tr>
                                    <td>City of Spouse's Birth</td>
                                    <td> {{  $data['partnerInfo']['birthCity']}} </td>
                                </tr>

                                <tr>
                                    <td>Country/Region of Spouse's birth</td>
                                    <td> {{ getLabelByValue($selectData,'countries', $data['partnerInfo'],'birthCountry') }}</td>
                                </tr>
                                

                                <tr>
                                    <td>Spouse's Address</td>
                                    <td> {{ getLabelByValue($selectData,'belongsToTribe', $data['partnerInfo'],'addressType') }}</td>
                                </tr>

                                @if( $data['partnerInfo']['addressType'] == 'OTHER_SPECIFY_ADDRESS')
                                
                                <tr>
                                    <td>Address</td>
                                    <td> {{ getLabelByValue($selectData,'status', $immRelative,'statusInput') }}</td>
                                </tr>
                                @endif
                                
                                
                            </table>
                        </div>
                    </div>
                </td>
            </tr>

        @endif


            <tr>
                <td> <b> Do you belong to a clan or tribe? </b></td>
                <td>{{rYes($data,'belongsToTribe')}}</td>
            </tr>
            @if($data['belongsToTribe']==1)
            <tr>
                <td> <b>  Clan or Tribe Name*</b></td>
                <td>{{ $data['tribeName'] }}</td>
            </tr>
            @endif
            <tr>
                <td> <b> Languages known*</b></td>
                <td>{{$data['speakingLanguagesInput']}}</td>
            </tr>
            <tr>
                <td> <b> Other languages you speak - Not listed above</b></td>

                <td>{{rYes($data,'hasOtherSpeakingLanguages')}}</td>

            </tr>
            @if($data['hasOtherSpeakingLanguages']==1)
                @foreach($data['additionalLanguage'] as $key => $language)
                <tr>
                    <td> <b> {{$key+1}} .Additional Language</b></td>
                    <td>{{ $language['otherSpeakingLanguages'] }}</td>
                </tr>
                @endforeach
            @endif
            <tr>
                <td> <b> Have you worked for any organizations, such as professional, social, or charitable ones?</b></td>

                <td>{{rYes($data,'hasWorkedToOrganization')}}</td>
            </tr>



        </table>




    </div>
</div>