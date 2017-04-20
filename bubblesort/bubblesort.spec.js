describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );

  });
   it('Test1', function(){
    expect( bubbleSort([4,5,2]) ).toEqual( [2,4,5] );

  });
   it('Test2', function(){
    expect( bubbleSort([8,1,5,10,400,3]) ).toEqual( [1,3,5,8,10,400] );

  });
   it('Test3', function(){
    expect( bubbleSort([7,9,32,7,7,8]) ).toEqual( [7,7,7,8,9,32] );

  });
   it('Test4', function(){
    expect( bubbleSort([-4,8,4,55,30,10,-6]) ).toEqual( [-6,-4,4,8,10,30,55] );

  });
   it('Test4', function(){
    expect( bubbleSort([1,2,3,4,5]) ).toEqual( [1,2,3,4,5] );

  });
   it('Test4', function(){
    expect( bubbleSort([4,2]) ).toEqual( [2,4] );

  });
});


