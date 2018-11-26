<?php

    $accountNumber = "947189298"; // Bauer Fedex Account Number
    $authKey = "N2ACCvAhmj1Txkzx"; 
    $meterNumber = "112962718";
    $productionURL = "https://ws.fedex.com:443/web-services";
    $productionPassword = "QMcw3pHy35aO8R6YnFZkx5afz";


    $user = "Hobet123";
    $pass = "Hobet@123";
    $email = "paul.ph227@gmail.com";

//https://ws.fedex.com:443/xml

    $headers = [];

//POST /xml HTTP/1.0
    $headers[] = "Referrer: BAUER.COM";//????
    $headers[] = "Host: ws.fedex.com";
    $headers[] = "Port: 443";
    $headers[] = "Accept: image/gif, image/jpeg, image/pjpeg, text/plain, text/html, */*";
    $headers[] = "Content-Type: text/xml";
    $headers[] = "Content-length: %d"; //replace %d

/*
Each line is followed by one new line character except Content-length and the FedEx transaction. Two
new line characters follow the Content-length line. The FedEx transaction has no extra characters. The
Content-length line should have the length of the FedEx transaction in place of the %d variable.
*/

$xml='
<?xml version="1.0" encoding="UTF-8"?>
<q0:TrackRequest xmlns:q0="http://fedex.com/ws/track/v14" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://fedex.com/ws/track/v14 TrackService_v14.xsd ">
  <q0:WebAuthenticationDetail>
    <q0:UserCredential>
      <q0:Key>N2ACCvAhmj1Txkzx</q0:Key>
      <q0:Password>QMcw3pHy35aO8R6YnFZkx5afz</q0:Password>
    </q0:UserCredential>
  </q0:WebAuthenticationDetail>
  <q0:ClientDetail>
    <q0:AccountNumber>947189298</q0:AccountNumber>
    <q0:MeterNumber>112962718</q0:MeterNumber>
  </q0:ClientDetail>
  <q0:Version>
    <q0:ServiceId>trck</q0:ServiceId>
    <q0:Major>14</q0:Major>
    <q0:Intermediate>0</q0:Intermediate>
    <q0:Minor>0</q0:Minor>
  </q0:Version>
  <q0:SelectionDetails>
    <q0:PackageIdentifier>
      <q0:Type>TRACKING_NUMBER_OR_DOORTAG</q0:Type>
      <q0:Value>449848787238</q0:Value>
    </q0:PackageIdentifier>
  </q0:SelectionDetails>
</q0:TrackRequest>';

$soap_url = "https://ws.fedex.com:443/web-services/track/";

//note: no headers

$soap='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:v14="http://fedex.com/ws/track/v14">
<soapenv:Header/>
<soapenv:Body>
   <v14:TrackRequest>
      <v14:WebAuthenticationDetail>
         <v14:ParentCredential>
            <v14:Key>N2ACCvAhmj1Txkzx</v14:Key>
            <v14:Password>QMcw3pHy35aO8R6YnFZkx5afz</v14:Password>
         </v14:ParentCredential>
         <v14:UserCredential>
            <v14:Key>N2ACCvAhmj1Txkzx</v14:Key>
            <v14:Password>QMcw3pHy35aO8R6YnFZkx5afz</v14:Password>
         </v14:UserCredential>
      </v14:WebAuthenticationDetail>
      <v14:ClientDetail>
         <v14:AccountNumber>947189298</v14:AccountNumber>
         <v14:MeterNumber>112962718</v14:MeterNumber>
      </v14:ClientDetail>
      <v14:TransactionDetail>
         <v14:CustomerTransactionId>Track By Number_v14</v14:CustomerTransactionId>
         <v14:Localization>
            <v14:LanguageCode>EN</v14:LanguageCode>
            <v14:LocaleCode>US</v14:LocaleCode>
         </v14:Localization>
      </v14:TransactionDetail>
      <v14:Version>
         <v14:ServiceId>trck</v14:ServiceId>
         <v14:Major>14</v14:Major>
         <v14:Intermediate>0</v14:Intermediate>
         <v14:Minor>0</v14:Minor>
      </v14:Version>
      <v14:SelectionDetails>
         <v14:CarrierCode>FDXE</v14:CarrierCode>
         <v14:PackageIdentifier>
            <v14:Type>TRACKING_NUMBER_OR_DOORTAG</v14:Type>
            <v14:Value>449848787238</v14:Value>
         </v14:PackageIdentifier>
        
         <v14:ShipmentAccountNumber/>
        

         <v14:SecureSpodAccount/>
           <v14:Destination>
            <v14:GeographicCoordinates>rates evertitque aequora</v14:GeographicCoordinates>
         </v14:Destination>
      </v14:SelectionDetails>
   </v14:TrackRequest>
</soapenv:Body>
</soapenv:Envelope>';