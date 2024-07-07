<div style="margin-top: 100px; margin-bottom: 20px;  border: 1px solid #eee; box-shadow: 0 1px 1px rgba(0,0,0,.05);  width : 100%; clear : both; ">
    <div style="color: #333; background-color: #f5f5f5; border-color: #ddd; padding: 5px 10px; border-bottom: 1px solid transparent;"> Trip details </div>
    <div style="padding: 8px; overflow : auto;  ">

        <table class="table table-bordered">
            <tr>
                <td> <b> Reason for the Trip* </b></td>
                <td>{{ getLabelByValue($selectData,'reasons_for_travel', $data['reasonForTripToUSSelect'],'value') }}</td>
            </tr>

            isset($data['purposes']) && @foreach($data['purposes'] as $key => $purpose)

            <tr>
                <td colspan="2">
                    <div class="card p-0">
                        <h6 class="card-header p-1">Purpose of the trip to the US #{{$key+1}}</h6>
                        <div class="card-body p-0">
                            <table class="table mb-0 table-bordered">
                                <tr>
                                    <td> <b>Purpose of the trip to the US*</b></td>
                                    <td>{{ getLabelByValue($selectData,'mainPurpose', $purpose,'mainPurpose') }}</td>
                                </tr>
                                <tr>
                                    <td><b> Specify </b></td>
                                    <td>{{ getLabelByValue($selectData,'specify', $purpose,'specify') }}</td>
                                </tr>

                            </table>
                        </div>
                    </div>

                </td>

            </tr>

            @endforeach


        </table>

        <table class="table table-bordered">
            <tr>
                <td> <b> Have you made any specific travel plans yet?* </b></td>


                <td> {{ getLabelByValue($selectData,'hasTravelPlansInput', $data,'hasTravelPlansInput') }}</td>
            </tr>

            @if($data['hasTravelPlansInput']=='specific_plans')
            <tr>
                <td> Date of Arrival</td>
                <td>{{dateFormat($data['travelPlan']['arrivalDate'])}}</td>
            </tr>
            <tr>
                <td>Arrival Flight</td>
                <td>{{$data["travelPlan"]["arrivalFlight"]}}</td>
            </tr>
            <tr>
                <td>Arrival City</td>
                <td>{{$data["travelPlan"]["arrivalCity"]}}</td>
            </tr>
            <tr>
                <td> Date Of Departure</td>
                <td>{{dateFormat($data['travelPlan']['departureDate'])}}</td>
            </tr>
            <tr>
                <td> Departure Flight </td>
                <td>{{$data['travelPlan']['departureFlight']}}</td>
            </tr>
            @endif
            <tr>
                <td> Who is paying for the trip?* </td>
                <td>{{ getLabelByValue($selectData,'personPayingForTrip', $data,'personPayingForTrip') }}</td>
            </tr>
            @if($data['personPayingForTrip']=='other_person')
            <tr>
                <td>
                    What is the name of the person paying for the trip?*
                </td>
                <td>
                    {{$data['otherPayerInfo']['name']}}
                </td>
            </tr>
            <tr>
                <td>
                    Telephone number*
                </td>
                <td>
                    {{$data['otherPayerInfo']['number']}}
                </td>
            </tr>
            <tr>
                <td>
                    Relationship to you*
                </td>
                <td>

                    {{ getLabelByValue($selectData,'relation', $data['otherPayerInfo'],'relation') }}
                </td>
            </tr>

            @endif







            <tr>
                <td>
                    <b> Person paying for trip has same address </b>

                </td>
                <td>
                    <b> {{ rYes($data,'hasSameAddressAsMailingOrHome')}} </b>
                </td>

            </tr>
            @if($data['hasSameAddressAsMailingOrHome'] == 0)
            <tr>
                <td>
                    Street address (Line 1 )*

                </td>
                <td>
                    {{$data['otherPayerInfo']['address']['streetAddress1']}}
                </td>

            </tr>
            <tr>
                <td>
                    Street address (Line 2)*

                </td>
                <td>
                    {{$data['otherPayerInfo']['address']['streetAddress2']}}
                </td>

            </tr>
            <tr>
                <td>
                    City

                </td>
                <td>
                    {{$data['otherPayerInfo']['address']['city']}}
                </td>

            </tr>
            <tr>

                <td>State/Province*</td>
                <td> {{$data['otherPayerInfo']['address']['state']}}</td>
            </tr>
            <tr>
                <td>Postal Zone/Zip Code*</td>
                <td> {{$data['otherPayerInfo']['address']['zipcode']}} </td>
            </tr>
            <tr>
                <td> Country/Region*</td>

                <td> {{ getLabelByValue($selectData,'countries', $data['otherPayerInfo']['address'],'country') }}</td>
            </tr>


            @endif






        </table>



    </div>
</div>