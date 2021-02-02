package com.neu.config;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import com.alibaba.druid.pool.DruidDataSource;

@Configuration
// 扫描 Mapper 接口并容器管理
@MapperScan(basePackages = Slave1DataSourceConfig.PACKAGE, sqlSessionFactoryRef = "slave1SqlSessionFactory")
public class Slave1DataSourceConfig {

    // 精确到 slave 目录，以便跟其他数据源隔离
    static final String PACKAGE = "com.neu.dao.slave1";
    static final String MAPPER_LOCATION = "classpath:mapper/slave1/*.xml";

    @Value("${slave1.datasource.url}")
    private String url;

    @Value("${slave1.datasource.username}")
    private String user;

    @Value("${slave1.datasource.password}")
    private String password;

    @Value("${slave1.datasource.driverClassName}")
    private String driverClass;

    @Bean(name = "slave1DataSource")
    public DataSource slave1DataSource() {
        DruidDataSource dataSource = new DruidDataSource();
        dataSource.setDriverClassName(driverClass);
        dataSource.setUrl(url);
        dataSource.setUsername(user);
        dataSource.setPassword(password);
        return dataSource;
    }

    @Bean(name = "slave1TransactionManager")
    public DataSourceTransactionManager slave1TransactionManager() {
        return new DataSourceTransactionManager(slave1DataSource());
    }

    @Bean(name = "slave1SqlSessionFactory")
    public SqlSessionFactory slave1SqlSessionFactory(@Qualifier("slave1DataSource") DataSource slave1DataSource)
            throws Exception {
        final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(slave1DataSource);
        sessionFactory.setMapperLocations(
                new PathMatchingResourcePatternResolver().getResources(Slave1DataSourceConfig.MAPPER_LOCATION));
        return sessionFactory.getObject();
    }
}