var express=require('express');
var router=express.Router();
const {body}=require('express-validator');
let Insert= ()=>
{
    
    return[body('Name')
    .isLength({min:2,Max:20}).withMessage('Name length only 20 Character')
    .trim().isAlpha().withMessage('Entry only Alphabets(A-Z,a-z')
    .notEmpty(),

    body('Email')
    .isEmail().withMessage('Enter Email address only')
    .notEmpty().withMessage('Email is required'),

    body('age')
    .notEmpty().withMessage('Age is required')
    .isNumeric().withMessage('Enter only number'),

    body('Mobile')
    .isMobilePhone().notEmpty().withMessage('Mobile number Required')
]
   


}
let InsertlocationApi= ()=>
{
    
    return[body('Location_name')
    .isLength({min:2,Max:20}).withMessage('Name length only 20 Character')
    .trim().isAlpha().withMessage('Entry only Alphabets(A-Z,a-z')
    .notEmpty(),

    body('Location_State')
    .isLength({min:2,Max:20}).withMessage('Name length only 20 Character')
    .trim().isAlpha().withMessage('Entry only Alphabets(A-Z,a-z')
    .notEmpty()

   
]
   

}
let InsertInstiuteApi= ()=>
{
    
    return[body('Inst_Name')
    .isLength({min:2,Max:20}).withMessage('Name length only 20 Character')
    .trim().isAlpha().withMessage('Entry only Alphabets(A-Z,a-z')
    .notEmpty(),

    body('Inst_Type')
    .isLength({min:2,Max:20}).withMessage('Name length only 20 Character')
    .trim().isAlpha().withMessage('Entry only Alphabets(A-Z,a-z')
    .notEmpty()

   
]
   

}
let InsertcouresApi= ()=>
{
    
    return[body('Course_Name')
    .isLength({min:2,Max:20}).withMessage('Name length only 20 Character')
    .trim().isAlpha().withMessage('Entry only Alphabets(A-Z,a-z')
    .notEmpty(),

    body('Coures_Mode')
    .isLength({min:2,Max:20}).withMessage('Name length only 20 Character')
    .trim().isAlpha().withMessage('Entry only Alphabets(A-Z,a-z')
    .notEmpty(),

    body('Coures_Duration')
    .notEmpty().withMessage('Age is required')
    .isNumeric().withMessage('Enter only number'),

]
}
module.exports={Insert:Insert,
InsertlocationApi:InsertlocationApi,
InsertInstiuteApi:InsertInstiuteApi,
InsertcouresApi:InsertcouresApi};