import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, Package, DollarSign } from 'lucide-react';

const salesData = [
  { month: 'Jan', sales: 4200, revenue: 12600 },
  { month: 'Feb', sales: 3800, revenue: 11400 },
  { month: 'Mar', sales: 5100, revenue: 15300 },
  { month: 'Apr', sales: 4600, revenue: 13800 },
  { month: 'May', sales: 5800, revenue: 17400 },
  { month: 'Jun', sales: 6200, revenue: 18600 },
];

const productDemand = [
  { category: "Women's Perfume", value: 42, color: 'hsl(var(--primary))' },
  { category: "Men's Perfume", value: 28, color: 'hsl(var(--secondary))' },
  { category: 'Skincare', value: 18, color: 'hsl(var(--accent))' },
  { category: 'Beauty Products', value: 12, color: 'hsl(var(--muted))' },
];

const customerDemographics = [
  { age: '18-24', male: 15, female: 22 },
  { age: '25-34', male: 32, female: 45 },
  { age: '35-44', male: 28, female: 38 },
  { age: '45-54', male: 18, female: 25 },
  { age: '55+', male: 12, female: 15 },
];

const topProducts = [
  { name: 'Rose Garden', sales: 285 },
  { name: 'Cedarwood Noir', sales: 245 },
  { name: 'Lavender Dreams', sales: 220 },
  { name: 'Citrus Bloom', sales: 198 },
  { name: 'Ocean Breeze', sales: 175 },
];

const Analytics = () => {
  return (
    <section id="analytics" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <TrendingUp className="text-primary" size={24} />
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              Performance Analytics
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Sales & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time data visualization of our business performance and customer preferences
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="group hover:shadow-elegant transition-all duration-300 cursor-pointer relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
            <CardHeader className="relative flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Sales</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold">$89,400</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elegant transition-all duration-300 cursor-pointer relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
            <CardHeader className="relative flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Products Sold</CardTitle>
              <Package className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold">29,700</div>
              <p className="text-xs text-muted-foreground">+15.3% from last month</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elegant transition-all duration-300 cursor-pointer relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
            <CardHeader className="relative flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">New Customers</CardTitle>
              <Users className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold">2,350</div>
              <p className="text-xs text-muted-foreground">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elegant transition-all duration-300 cursor-pointer relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
            <CardHeader className="relative flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Growth Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold">+18.2%</div>
              <p className="text-xs text-muted-foreground">Consistent upward trend</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sales Performance */}
          <Card className="group hover:shadow-elegant transition-all duration-300 relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500" />
            <CardHeader className="relative">
              <CardTitle className="font-serif">Sales Performance</CardTitle>
              <CardDescription>Monthly sales and revenue trends</CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: 'hsl(var(--primary))' }} />
                  <Line type="monotone" dataKey="revenue" stroke="hsl(var(--secondary))" strokeWidth={2} dot={{ fill: 'hsl(var(--secondary))' }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Product Demand */}
          <Card className="group hover:shadow-elegant transition-all duration-300 relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500" />
            <CardHeader className="relative">
              <CardTitle className="font-serif">Product Demand</CardTitle>
              <CardDescription>Sales distribution by category</CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={productDemand}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {productDemand.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Customer Demographics */}
          <Card className="group hover:shadow-elegant transition-all duration-300 relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500" />
            <CardHeader className="relative">
              <CardTitle className="font-serif">Customer Demographics</CardTitle>
              <CardDescription>Age and gender distribution</CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={customerDemographics}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="age" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="male" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="female" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card className="group hover:shadow-elegant transition-all duration-300 relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500" />
            <CardHeader className="relative">
              <CardTitle className="font-serif">Top Products</CardTitle>
              <CardDescription>Best selling items this month</CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topProducts} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                  <YAxis dataKey="name" type="category" stroke="hsl(var(--muted-foreground))" width={100} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="sales" fill="hsl(var(--accent))" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Analytics;