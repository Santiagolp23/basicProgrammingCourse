int red = 13;
int yellow = 7;
int milliseconds = 250;

void setup() {
  pinMode(red, OUTPUT);
  pinMode(yellow, OUTPUT);
}

void loop() {
 digitalWrite(red, HIGH);
 digitalWrite(yellow, LOW);
 delay(milliseconds);
 digitalWrite(red, LOW);
 digitalWrite(yellow, HIGH);
 delay(milliseconds * 2);

}