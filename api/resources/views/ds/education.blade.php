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
                <td>{{ getLabelByValue($selectData,'countries', $data['jobAddress'], 'country') }}</td>
            </tr>
            <tr>
                <td> <b>Start Date* </b></td>
                <td> {{dateFormat($data['jobStartDate'])}}</td>
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
            @if($data['hasBeenPreviouslyEmployed']==1)
            @foreach($data['previousJobs'] as $ji => $jobs)
            <tr>
                <td colspan="2">
                    <div class="card p-0">
                        <h6 class="card-header p-1">Previous job # {{$ji +1 }} </h6>
                        <div class="card-body p-0">
                            <table class="table mb-0 table-bordered">


                                <tr>
                                    <td>Employer name</td>
                                    <td>{{ $jobs['employer']}}</td>
                                </tr>
                                <tr>
                                    <td>Street address (Line 1)</td>
                                    <td>{{ $jobs['streetAddress']}}</td>
                                </tr>
                                <tr>
                                    <td>Street address (Line 2)</td>
                                    <td>{{ $jobs['streetAddress2']}}</td>
                                </tr>
                                <tr>
                                    <td>City</td>
                                    <td>{{ $jobs['city']}}</td>
                                </tr>
                                <tr>
                                    <td>State</td>
                                    <td>{{ $jobs['state']}}</td>
                                </tr>
                                <tr>
                                    <td>Postal Zone/Zip Code</td>
                                    <td>{{ $jobs['zipCode']}}</td>
                                </tr>
                                <tr>
                                    <td>Country/Region</td>
                                    <td> getLabelByValue($selectData,'countries', $jobs,'country')</td>
                                </tr>
                                <tr>
                                    <td>Telephone number</td>
                                    <td>{{ $jobs['jobPhoneNumber']}}</td>
                                </tr>

                                <tr>
                                    <td>Job title</td>
                                    <td>{{ $jobs['title']}}</td>
                                </tr>

                                <tr>
                                    <td>Supervisor's Family Name(s)</td>
                                    <td>{{ $jobs['supervisor_last_name']}}</td>
                                </tr>

                                <tr>
                                    <td>Supervisor's First (Given) Name(s)</td>
                                    <td>{{ $jobs['supervisor_first_name']}}</td>
                                </tr>



                                <tr>
                                    <td>Date of Attendance From</td>
                                    <td>{{ dateFormat($jobs['jobStartDate'])}}</td>
                                </tr>
                                <tr>
                                    <td>Date of Attendance To</td>
                                    <td>{{ dateFormat($jobs['jobEndDate'])}}</td>
                                </tr>

                                <tr>
                                    <td>Briefly describe your duties</td>
                                    <td>{{ $jobs['jobDescribe']}}</td>
                                </tr>


                            </table>
                        </div>
                    </div>
                </td>
            </tr>
            @endforeach
            @endif





            <tr>
                <td> <b> Have you attended any educational institutions at a secondary level or above?</b></td>

                <td>{{rYes($data,'hasAttendedEducationalInstitutions')}}</td>
            </tr>

            @if($data['hasAttendedEducationalInstitutions']==1)
            @foreach($data['educationalInstitution'] as $inst)
            <tr>
                <td colspan="2">
                    <div class="card p-0">
                        <h6 class="card-header p-1">Previous Institution #1 </h6>
                        <div class="card-body p-0">
                            <table class="table mb-0 table-bordered">


                                <tr>
                                    <td>Name of the Institution</td>
                                    <td>{{ $inst['name']}}</td>
                                </tr>
                                <tr>
                                    <td>Street address (Line 1)</td>
                                    <td>{{ $inst['streetAddress1']}}</td>
                                </tr>
                                <tr>
                                    <td>Street address (Line 2)</td>
                                    <td>{{ $inst['streetAddress2']}}</td>
                                </tr>
                                <tr>
                                    <td>City</td>
                                    <td>{{ $inst['city']}}</td>
                                </tr>
                                <tr>
                                    <td>State</td>
                                    <td>{{ $inst['state']}}</td>
                                </tr>
                                <tr>
                                    <td>Postal Zone/Zip Code</td>
                                    <td>{{ $inst['zipCode']}}</td>
                                </tr>
                                <tr>
                                    <td>Country/Region</td>
                                    <td> getLabelByValue($selectData,'countries', $inst,'country')</td>
                                </tr>
                                <tr>
                                    <td>Course of Study</td>
                                    <td>{{ $inst['jobPhoneNumber']}}</td>
                                </tr>
                                <tr>
                                    <td>Date of Attendance From</td>
                                    <td>{{ dateFormat($inst['startDate'])}}</td>
                                </tr>
                                <tr>
                                    <td>Date of Attendance To</td>
                                    <td>{{ dateFormat($inst['endDate'])}}</td>
                                </tr>




                            </table>
                        </div>
                    </div>
                </td>
            </tr>
            @endforeach
            @endif





        </table>




    </div>
</div>