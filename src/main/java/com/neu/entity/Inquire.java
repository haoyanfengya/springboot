package com.neu.entity;
/**类的变量
 *  1.area(用于存放String类型) 
 *  2.number(用于存放integer类型) 
 *  3.Amount(用于存放double类型)
 *  4.selected(用于存放boolean类型)*/
public class Inquire {
			private String Areas;
			private Integer number;
			private Integer number2;
			public final Integer getNumber2() {
				return number2;
			}
			public final void setNumber2(Integer number2) {
				this.number2 = number2;
			}
			private double Amount;
			private boolean selected;
			public final String getAreas() {
				return Areas;
			}
			public final void setAreas(String areas) {
				Areas = areas;
			}
			public final Integer getNumber() {
				return number;
			}
			public final void setNumber(Integer number) {
				this.number = number;
			}
			public final double getAmount() {
				return Amount;
			}
			public final void setAmount(double amount) {
				Amount = amount;
			}
			public final boolean getSelected() {
				return selected;
			}
			public final void setSelected(boolean selected) {
				this.selected = selected;
			}
			public Inquire(String areas, Integer number, double amount, boolean selected) {
				super();
				Areas = areas;
				this.number = number;
				Amount = amount;
				this.selected = selected;
			}
			public Inquire() {
				super();
				// TODO Auto-generated constructor stub
			}
			public Inquire(String areas, double amount) {
				super();
				Areas = areas;
				Amount = amount;
			}
			public Inquire(String areas, Integer number) {
				super();
				Areas = areas;
				this.number = number;
			}
			public Inquire(String areas, Integer number, boolean selected) {
				super();
				Areas = areas;
				this.number = number;
				this.selected = selected;
			}
			@Override
			public String toString() {
				return "Inquire [Areas=" + Areas + ", number=" + number + ", number2=" + number2 + ", Amount=" + Amount
						+ ", selected=" + selected + "]";
			}
			
			
			
}
