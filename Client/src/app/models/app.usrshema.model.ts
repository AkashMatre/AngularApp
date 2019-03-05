export class userSchema
{
  constructor(
     public FullName: {
        FirstName: string,
        MiddleName: string,
        LastName: string
      },
      public Gender:string,
      public DateOfBirth: string,
      public Age: number,        // auto calculate
      public Address: {
        FlatNumber: string,
        SocietyName: string,
        AreaName: string
      },
      public Email: string,
      public City: string,
      public State: string,
      public Pincode: number,
      public PhoneNo: number,                  // should be optional
      public MobileNo:number,
      public PhysicalDisability:string,
      public MaritalStatus: string,
      public Education: string,
      public BirthSign:string,
      public isAuthorized:string,
      public Usr_Id:number
  ){}
}
