import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, CalculatorComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});

describe('CalculatorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, CalculatorComponent
      ],
    }).compileComponents();
  }));
  it('should have result', async(() => {
    const calc = new CalculatorComponent();
    expect(calc.result).toEqual(0);
  }));
  it('must sum numbers', async(() => {
    const calc = new CalculatorComponent();
    expect(calc.calcSum(5,2)).toEqual(7);
  }));
  it('must display the result', async(() => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const calc = fixture.debugElement.componentInstance;
    calc.result=7;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(document.getElementById('calculatorTotal').textContent).toContain('7');
  }));
  it('must calculate the correct result based on the input', async(() => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const calc = fixture.debugElement.componentInstance;
    (<HTMLInputElement>document.getElementById('input1')).value = '5';
    (<HTMLInputElement>document.getElementById('input2')).value = '3';
    document.getElementById('calculatorButton').click();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(document.getElementById('calculatorTotal').textContent).toContain('8');
  })); 
});
